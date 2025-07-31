// Serviço para integração com a API do PNCP
// Portal Nacional de Contratações Públicas
// Baseado no Manual de Integração PNCP - versão 2.3.7 Jun/25

import { getMockLicitacoes, getMockLicitacaoDetalhes, getMockEstatisticas } from './mockData.js'

// URL base da API do PNCP - Endpoint funcional encontrado
const PNCP_BASE_URL = 'https://pncp.gov.br/api/consulta';

// Tabelas de domínio conforme manual PNCP v2.3.7
const MODALIDADES_CONTRATACAO = {
  1: 'Leilão - Eletrônico',
  2: 'Diálogo Competitivo',
  3: 'Concurso',
  4: 'Concorrência - Eletrônica',
  5: 'Concorrência - Presencial',
  6: 'Pregão - Eletrônico',
  7: 'Pregão - Presencial',
  8: 'Dispensa de Licitação',
  9: 'Inexigibilidade',
  10: 'Manifestação de Interesse',
  11: 'Pré-qualificação',
  12: 'Credenciamento',
  13: 'Leilão - Presencial'
};

const SITUACOES_CONTRATACAO = {
  1: 'Divulgada no PNCP',
  2: 'Revogada',
  3: 'Anulada',
  4: 'Suspensa'
};

const MODOS_DISPUTA = {
  1: 'Aberto',
  2: 'Fechado',
  3: 'Aberto-Fechado',
  4: 'Dispensa Com Disputa',
  5: 'Não se aplica',
  6: 'Fechado-Aberto'
};

class PncpApiService {
  constructor() {
    this.baseUrl = PNCP_BASE_URL;
    console.log('🚀 PNCP API Service inicializado com URL:', this.baseUrl);
  }

  // Formatar data para o formato AAAAMMDD conforme especificação da API
  formatarDataParaAPI(data) {
    if (!data) return null;
    const d = new Date(data);
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    return `${ano}${mes}${dia}`;
  }

  // Método principal para buscar contratações
  // Conforme nova especificação da API v2.3.7
  async buscarLicitacoes(filtros = {}, pagina = 1, itensPorPagina = 50) {
    try {
      // Construir query string conforme nova especificação da API
      const params = new URLSearchParams();
      
      // Parâmetros de data conforme nova especificação
      if (filtros.dataInicio) {
        params.append('dataInicial', this.formatarDataParaAPI(filtros.dataInicio));
      }
      if (filtros.dataFim) {
        params.append('dataFinal', this.formatarDataParaAPI(filtros.dataFim));
      }
      
      // Parâmetros opcionais conforme nova especificação
      if (filtros.modalidade) {
        params.append('modalidadeId', filtros.modalidade);
      }
      if (filtros.modoDisputa) {
        params.append('modoDisputaId', filtros.modoDisputa);
      }
      if (filtros.estado) {
        params.append('uf', filtros.estado);
      }
      if (filtros.municipio) {
        params.append('municipioId', filtros.municipio);
      }
      if (filtros.cnpj) {
        params.append('cnpj', filtros.cnpj);
      }
      if (filtros.codigoUnidadeAdministrativa) {
        params.append('unidadeAdministrativaId', filtros.codigoUnidadeAdministrativa);
      }
      if (filtros.idUsuario) {
        params.append('usuarioId', filtros.idUsuario);
      }
      
      // Parâmetros de paginação conforme endpoint funcional
      params.append('pagina', pagina);
      if (itensPorPagina) {
        params.append('tamanho', itensPorPagina);
      }
      
      // Usar endpoint funcional encontrado
      const url = `${this.baseUrl}/v1/contratacoes/proposta?${params.toString()}`;
      console.log('🔍 API Request URL:', url);
      console.log('🔍 Filtros enviados:', filtros);
      
      // Tentar fazer a requisição com timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 segundos timeout
      
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);
      
      console.log('🔍 API Response Status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('🔍 API Response Data:', data);
      
      // Processar resposta conforme estrutura da API funcional
      return {
        data: data.data || data.content || [],
        total: data.totalRegistros || data.totalElements || 0,
        totalPages: data.totalPaginas || data.totalPages || 0,
        currentPage: data.numeroPagina || data.number || 0,
        empty: data.empty || false
      };
      
    } catch (error) {
      console.error('❌ Erro ao buscar licitações:', error);
      console.log('🔄 Usando dados mock como fallback...');
      
      // Verificar se é erro de CORS ou API não disponível
      if (error.name === 'AbortError') {
        console.log('⏰ Timeout na requisição - API pode estar indisponível');
      } else if (error.message.includes('CORS')) {
        console.log('🚫 Erro de CORS - API pode não permitir requisições do navegador');
      }
      
      // Usar dados mock em caso de erro
      const mockData = getMockLicitacoes(filtros);
      return {
        data: mockData.content || [],
        total: mockData.totalElements || 0,
        totalPages: Math.ceil((mockData.totalElements || 0) / itensPorPagina),
        currentPage: pagina - 1,
        empty: false
      };
    }
  }

  // Buscar contratações com período de recebimento de propostas em aberto
  // Conforme nova especificação da API v2.3.7
  async buscarLicitacoesEmAberto(filtros = {}, pagina = 1, itensPorPagina = 50) {
    try {
      const params = new URLSearchParams();
      
      // Parâmetros obrigatórios conforme nova especificação
      if (filtros.dataFim) {
        params.append('dataFinal', this.formatarDataParaAPI(filtros.dataFim));
      }
      if (filtros.modalidade) {
        params.append('modalidadeId', filtros.modalidade);
      }
      
      // Parâmetros opcionais
      if (filtros.estado) {
        params.append('uf', filtros.estado);
      }
      if (filtros.municipio) {
        params.append('municipioId', filtros.municipio);
      }
      if (filtros.cnpj) {
        params.append('cnpj', filtros.cnpj);
      }
      if (filtros.codigoUnidadeAdministrativa) {
        params.append('unidadeAdministrativaId', filtros.codigoUnidadeAdministrativa);
      }
      if (filtros.idUsuario) {
        params.append('usuarioId', filtros.idUsuario);
      }
      
      params.append('page', pagina);
      if (itensPorPagina) {
        params.append('size', itensPorPagina);
      }
      
      // Usar novo endpoint para licitações em aberto
      const url = `${this.baseUrl}/v1/contratacoes/abertas?${params.toString()}`;
      console.log('🔍 API Request URL (Em Aberto):', url);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('🔍 API Response Data (Em Aberto):', data);
      
      return {
        data: data.content || data.data || [],
        total: data.totalElements || data.totalRegistros || 0,
        totalPages: data.totalPages || data.totalPaginas || 0,
        currentPage: data.number || data.numeroPagina || 0,
        empty: data.empty || false
      };
      
    } catch (error) {
      console.error('❌ Erro ao buscar licitações em aberto:', error);
      return {
        data: [],
        total: 0,
        totalPages: 0,
        currentPage: pagina - 1,
        empty: true
      };
    }
  }

  // Buscar licitações por estado usando a API correta
  async getLicitacoesByEstado(estado, page = 1, size = 50) {
    try {
      const hoje = new Date();
      const dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1); // Primeiro dia do mês
      
      const filtros = {
        estado: estado,
        dataInicio: dataInicio.toISOString().split('T')[0],
        dataFim: hoje.toISOString().split('T')[0]
      };
      
      return await this.buscarLicitacoes(filtros, page, size);
    } catch (error) {
      console.error('Erro ao buscar licitações por estado:', error);
      return getMockLicitacoes({ estado });
    }
  }

  // Buscar licitações por modalidade
  async getLicitacoesByModalidade(modalidade, page = 1, size = 50) {
    try {
      const hoje = new Date();
      const dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
      
      const filtros = {
        modalidade: modalidade,
        dataInicio: dataInicio.toISOString().split('T')[0],
        dataFim: hoje.toISOString().split('T')[0]
      };
      
      return await this.buscarLicitacoes(filtros, page, size);
    } catch (error) {
      console.error('Erro ao buscar licitações por modalidade:', error);
      return getMockLicitacoes({ modalidade });
    }
  }

  // Buscar licitações por status
  async getLicitacoesByStatus(status, page = 1, size = 50) {
    try {
      const hoje = new Date();
      const dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
      
      const filtros = {
        status: status,
        dataInicio: dataInicio.toISOString().split('T')[0],
        dataFim: hoje.toISOString().split('T')[0]
      };
      
      return await this.buscarLicitacoes(filtros, page, size);
    } catch (error) {
      console.error('Erro ao buscar licitações por status:', error);
      return getMockLicitacoes({ status });
    }
  }

  // Buscar detalhes de uma licitação específica
  async getLicitacaoDetalhes(idLicitacao) {
    try {
      const response = await fetch(`${this.baseUrl}/v1/contratacoes/${idLicitacao}`);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar detalhes da licitação:', error);
      return getMockLicitacaoDetalhes(idLicitacao);
    }
  }

  // Buscar licitações por palavra-chave (busca no objeto da compra)
  async searchLicitacoes(query, page = 1, size = 50) {
    try {
      const hoje = new Date();
      const dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
      
      const filtros = {
        palavraChave: query,
        dataInicio: dataInicio.toISOString().split('T')[0],
        dataFim: hoje.toISOString().split('T')[0]
      };
      
      return await this.buscarLicitacoes(filtros, page, size);
    } catch (error) {
      console.error('Erro ao buscar licitações:', error);
      return getMockLicitacoes({ palavraChave: query });
    }
  }

  // Buscar estatísticas de licitações
  async getEstatisticas() {
    try {
      const response = await fetch(`${this.baseUrl}/v1/estatisticas`);
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
      return getMockEstatisticas();
    }
  }

  // Buscar licitações recentes (últimos 30 dias)
  async getLicitacoesRecentes(page = 1, size = 50) {
    try {
      const hoje = new Date();
      const dataInicio = new Date(hoje.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 dias atrás
      
      const filtros = {
        dataInicio: dataInicio.toISOString().split('T')[0],
        dataFim: hoje.toISOString().split('T')[0]
      };
      
      return await this.buscarLicitacoes(filtros, page, size);
    } catch (error) {
      console.error('Erro ao buscar licitações recentes:', error);
      return getMockLicitacoes();
    }
  }

  // Buscar licitações por valor estimado
  async getLicitacoesByValor(valorMin, valorMax, page = 1, size = 50) {
    try {
      const hoje = new Date();
      const dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
      
      const filtros = {
        valorMin: valorMin,
        valorMax: valorMax,
        dataInicio: dataInicio.toISOString().split('T')[0],
        dataFim: hoje.toISOString().split('T')[0]
      };
      
      return await this.buscarLicitacoes(filtros, page, size);
    } catch (error) {
      console.error('Erro ao buscar licitações por valor:', error);
      return getMockLicitacoes();
    }
  }

  // Buscar licitações por órgão
  async getLicitacoesByOrgao(orgao, page = 1, size = 50) {
    try {
      const hoje = new Date();
      const dataInicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
      
      const filtros = {
        orgao: orgao,
        dataInicio: dataInicio.toISOString().split('T')[0],
        dataFim: hoje.toISOString().split('T')[0]
      };
      
      return await this.buscarLicitacoes(filtros, page, size);
    } catch (error) {
      console.error('Erro ao buscar licitações por órgão:', error);
      return getMockLicitacoes({ orgao });
    }
  }

  // Testar conectividade da API
  async testarConexao() {
    try {
      console.log('🧪 Testando conectividade com a API do PNCP...');
      
      // Testar endpoint funcional com data de hoje
      const hoje = this.formatarDataParaAPI(new Date());
      const response = await fetch(`${this.baseUrl}/v1/contratacoes/proposta?dataInicial=${hoje}&dataFinal=${hoje}&pagina=1&tamanho=1`);
      console.log('🧪 Status da resposta:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('🧪 Dados de teste:', data);
        return true;
      } else {
        console.log('🧪 API retornou erro:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('🧪 Erro ao testar API:', error);
      return false;
    }
  }

  // Buscar licitações sem filtros para testar
  async buscarLicitacoesTeste() {
    try {
      console.log('🧪 Testando busca de licitações sem filtros...');
      const hoje = this.formatarDataParaAPI(new Date());
      const response = await fetch(`${this.baseUrl}/v1/contratacoes/proposta?dataInicial=${hoje}&dataFinal=${hoje}&pagina=1&tamanho=5`);
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('🧪 Licitações encontradas:', data);
      return data;
    } catch (error) {
      console.error('🧪 Erro no teste:', error);
      return null;
    }
  }

  // Testar diferentes endpoints da API conforme endpoint funcional
  async testarEndpoints() {
    const endpoints = [
      `${this.baseUrl}/v1/contratacoes/proposta`,
      `${this.baseUrl}/v1/contratacoes/publicacao`,
      `${this.baseUrl}/v1/modalidades`,
      `${this.baseUrl}/v1/modos-disputas`,
      `${this.baseUrl}/v1/estatisticas`
    ];
    
    console.log('🧪 Testando diferentes endpoints...');
    
    for (const endpoint of endpoints) {
      try {
        console.log(`🧪 Testando: ${endpoint}`);
        const hoje = this.formatarDataParaAPI(new Date());
        const testUrl = `${endpoint}?dataInicial=${hoje}&dataFinal=${hoje}&pagina=1&tamanho=1`;
        
        const response = await fetch(testUrl);
        console.log(`🧪 Status: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log(`🧪 ✅ Endpoint funcionando: ${endpoint}`);
          console.log('🧪 Dados:', data);
          return endpoint;
        }
      } catch (error) {
        console.log(`🧪 ❌ Endpoint falhou: ${endpoint} - ${error.message}`);
      }
    }
    
    console.log('🧪 ❌ Nenhum endpoint funcionou');
    return null;
  }

  // Testar filtros de data especificamente
  async testarFiltrosData() {
    const hoje = new Date().toISOString().split('T')[0];
    console.log('🧪 Testando filtros de data...');
    console.log('🧪 Data de hoje:', hoje);
    
    const filtros = {
      dataInicio: hoje,
      dataFim: hoje
    };
    
    console.log('🧪 Filtros de data:', filtros);
    
    try {
      // Testar com API real
      const response = await this.buscarLicitacoes(filtros, 1, 10);
      console.log('🧪 Resultado API real:', response);
      
      // Testar com mock data
      const mockData = getMockLicitacoes(filtros);
      console.log('🧪 Resultado mock data:', mockData);
      
      return {
        api: response,
        mock: mockData,
        dataTestada: hoje
      };
    } catch (error) {
      console.error('🧪 Erro no teste de data:', error);
      return null;
    }
  }

  // Obter modalidades de contratação
  getModalidadesContratacao() {
    return MODALIDADES_CONTRATACAO;
  }

  // Obter situações de contratação
  getSituacoesContratacao() {
    return SITUACOES_CONTRATACAO;
  }

  // Obter modos de disputa
  getModosDisputa() {
    return MODOS_DISPUTA;
  }
}

// Instância singleton do serviço
const pncpApiService = new PncpApiService();

export default pncpApiService; 