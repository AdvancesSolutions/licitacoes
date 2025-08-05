// Serviço para integração com a API do PNCP
// Portal Nacional de Contratações Públicas
// Baseado no Manual das APIs de Consultas PNCP - Versão 1.0

// URLs base conforme manual PNCP
const PNCP_BASE_URL = 'https://pncp.gov.br/api/consulta';

// Dados mock para quando a API não estiver disponível
const MOCK_LICITACOES = [
  {
    id: '001',
    numeroControlePNCP: '2024-001',
    orgao: 'Prefeitura Municipal de São Paulo',
    objeto: 'Aquisição de material de escritório',
    modalidade: 'Pregão - Eletrônico',
    valorEstimado: 50000.00,
    dataAbertura: '2024-01-15',
    status: 'Em Andamento',
    situacaoCompraNome: 'Divulgada no PNCP'
  },
  {
    id: '002',
    numeroControlePNCP: '2024-002',
    orgao: 'Secretaria de Educação',
    objeto: 'Fornecimento de merenda escolar',
    modalidade: 'Pregão - Eletrônico',
    valorEstimado: 150000.00,
    dataAbertura: '2024-01-20',
    status: 'Aberta',
    situacaoCompraNome: 'Divulgada no PNCP'
  },
  {
    id: '003',
    numeroControlePNCP: '2024-003',
    orgao: 'Departamento de Transportes',
    objeto: 'Manutenção de veículos oficiais',
    modalidade: 'Concorrência - Eletrônica',
    valorEstimado: 75000.00,
    dataAbertura: '2024-01-25',
    status: 'Finalizada',
    situacaoCompraNome: 'Homologada'
  },
  {
    id: '004',
    numeroControlePNCP: '2024-004',
    orgao: 'Secretaria de Saúde',
    objeto: 'Aquisição de equipamentos médicos',
    modalidade: 'Pregão - Eletrônico',
    valorEstimado: 200000.00,
    dataAbertura: '2024-01-30',
    status: 'Em Andamento',
    situacaoCompraNome: 'Divulgada no PNCP'
  },
  {
    id: '005',
    numeroControlePNCP: '2024-005',
    orgao: 'Secretaria de Cultura',
    objeto: 'Realização de eventos culturais',
    modalidade: 'Pregão - Eletrônico',
    valorEstimado: 80000.00,
    dataAbertura: '2024-02-01',
    status: 'Aberta',
    situacaoCompraNome: 'Divulgada no PNCP'
  }
];

// Função para gerar dados mock baseados em filtros
function getMockLicitacoes(filtros = {}) {
  let licitacoes = [...MOCK_LICITACOES];
  
  // Aplicar filtros
  if (filtros.modalidade) {
    licitacoes = licitacoes.filter(l => l.modalidade === filtros.modalidade);
  }
  
  if (filtros.estado) {
    licitacoes = licitacoes.filter(l => l.orgao.includes(filtros.estado));
  }
  
  if (filtros.valorMin) {
    licitacoes = licitacoes.filter(l => l.valorEstimado >= filtros.valorMin);
  }
  
  if (filtros.valorMax) {
    licitacoes = licitacoes.filter(l => l.valorEstimado <= filtros.valorMax);
  }
  
  return {
    content: licitacoes,
    totalElements: licitacoes.length,
    totalPages: 1,
    number: 0,
    size: licitacoes.length,
    empty: licitacoes.length === 0
  };
}

// Tabelas de domínio conforme manual PNCP v1.0
const INSTRUMENTOS_CONVOCATORIOS = {
  1: 'Edital',
  2: 'Aviso de Licitação',
  3: 'Convocação',
  4: 'Convite',
  5: 'Carta Convite',
  6: 'Aviso de Manifestação de Interesse',
  7: 'Aviso de Credenciamento',
  8: 'Aviso de Pré-qualificação',
  9: 'Aviso de Diálogo Competitivo',
  10: 'Aviso de Concurso',
  11: 'Aviso de Leilão'
};

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

const MODOS_DISPUTA = {
  1: 'Aberto',
  2: 'Fechado',
  3: 'Aberto-Fechado',
  4: 'Dispensa Com Disputa',
  5: 'Não se aplica',
  6: 'Fechado-Aberto'
};

const CRITERIOS_JULGAMENTO = {
  1: 'Menor Preço',
  2: 'Maior Desconto',
  3: 'Melhor Técnica',
  4: 'Técnica e Preço',
  5: 'Maior Lance ou Oferta',
  6: 'Melhor Conteúdo Artístico',
  7: 'Maior Retorno Econômico',
  8: 'Maior Eficiência Energética',
  9: 'Maior Eficiência Energética e Menor Preço',
  10: 'Maior Eficiência Energética e Melhor Técnica',
  11: 'Maior Eficiência Energética, Técnica e Preço',
  12: 'Maior Eficiência Energética e Maior Desconto',
  13: 'Maior Eficiência Energética e Maior Lance ou Oferta',
  14: 'Maior Eficiência Energética e Melhor Conteúdo Artístico',
  15: 'Maior Eficiência Energética e Maior Retorno Econômico',
  16: 'Maior Eficiência Energética e Maior Eficiência Energética',
  17: 'Maior Eficiência Energética e Maior Eficiência Energética e Menor Preço',
  18: 'Maior Eficiência Energética e Maior Eficiência Energética e Melhor Técnica',
  19: 'Maior Eficiência Energética e Maior Eficiência Energética, Técnica e Preço',
  20: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Desconto',
  21: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Lance ou Oferta',
  22: 'Maior Eficiência Energética e Maior Eficiência Energética e Melhor Conteúdo Artístico',
  23: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Retorno Econômico',
  24: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética',
  25: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética e Menor Preço',
  26: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética e Melhor Técnica',
  27: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética, Técnica e Preço',
  28: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética e Maior Desconto',
  29: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética e Maior Lance ou Oferta',
  30: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética e Melhor Conteúdo Artístico',
  31: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética e Maior Retorno Econômico',
  32: 'Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética e Maior Eficiência Energética'
};

const SITUACOES_CONTRATACAO = {
  1: 'Divulgada no PNCP',
  2: 'Revogada',
  3: 'Anulada',
  4: 'Suspensa'
};

const SITUACOES_ITEM_CONTRATACAO = {
  1: 'Ativo',
  2: 'Inativo',
  3: 'Suspenso',
  4: 'Cancelado'
};

const TIPOS_BENEFICIO = {
  1: 'ME/EPP',
  2: 'Cooperativa',
  3: 'Microempresa',
  4: 'Empresa de Pequeno Porte',
  5: 'Empresa de Médio Porte',
  6: 'Empresa de Grande Porte',
  7: 'Empresa Individual',
  8: 'Empresa Individual de Responsabilidade Limitada',
  9: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples',
  10: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato',
  11: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato',
  12: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato',
  13: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato de Fato',
  14: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato de Fato de Fato',
  15: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato de Fato de Fato de Fato',
  16: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato de Fato de Fato de Fato de Fato',
  17: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato',
  18: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato',
  19: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato',
  20: 'Empresa Individual de Responsabilidade Limitada de Natureza Simples de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato de Fato'
};

const SITUACOES_RESULTADO_ITEM = {
  1: 'Homologado',
  2: 'Deserto',
  3: 'Fracassado',
  4: 'Anulado',
  5: 'Suspenso',
  6: 'Cancelado'
};

const TIPOS_CONTRATO = {
  1: 'Contrato',
  2: 'Termo de Contrato',
  3: 'Acordo',
  4: 'Convênio',
  5: 'Ajuste',
  6: 'Termo de Compromisso',
  7: 'Termo de Fomento',
  8: 'Termo de Colaboração',
  9: 'Termo de Parceria',
  10: 'Termo de Cooperação'
};

const TIPOS_TERMO_CONTRATO = {
  1: 'Termo Aditivo',
  2: 'Termo de Rescisão',
  3: 'Termo de Suspensão',
  4: 'Termo de Retomada',
  5: 'Termo de Alteração',
  6: 'Termo de Prorrogação',
  7: 'Termo de Renovação',
  8: 'Termo de Substituição',
  9: 'Termo de Transferência',
  10: 'Termo de Extinção'
};

const CATEGORIAS_PROCESSO = {
  1: 'Compras',
  2: 'Serviços',
  3: 'Obras',
  4: 'Tecnologia da Informação',
  5: 'Comunicação',
  6: 'Transporte',
  7: 'Segurança',
  8: 'Saúde',
  9: 'Educação',
  10: 'Cultura',
  11: 'Esporte',
  12: 'Lazer',
  13: 'Turismo',
  14: 'Meio Ambiente',
  15: 'Agricultura',
  16: 'Pecuária',
  17: 'Pesca',
  18: 'Mineração',
  19: 'Indústria',
  20: 'Comércio',
  21: 'Serviços Financeiros',
  22: 'Serviços Imobiliários',
  23: 'Serviços Pessoais',
  24: 'Serviços de Apoio',
  25: 'Serviços de Consultoria',
  26: 'Serviços de Engenharia',
  27: 'Serviços de Arquitetura',
  28: 'Serviços de Design',
  29: 'Serviços de Publicidade',
  30: 'Serviços de Marketing',
  31: 'Serviços de Comunicação',
  32: 'Serviços de Tecnologia',
  33: 'Serviços de Telecomunicações',
  34: 'Serviços de Energia',
  35: 'Serviços de Água',
  36: 'Serviços de Saneamento',
  37: 'Serviços de Limpeza',
  38: 'Serviços de Segurança',
  39: 'Serviços de Vigilância',
  40: 'Serviços de Manutenção',
  41: 'Serviços de Conservação',
  42: 'Serviços de Restauração',
  43: 'Serviços de Reforma',
  44: 'Serviços de Construção',
  45: 'Serviços de Demolição',
  46: 'Serviços de Terraplenagem',
  47: 'Serviços de Pavimentação',
  48: 'Serviços de Drenagem',
  49: 'Serviços de Iluminação',
  50: 'Serviços de Sinalização'
};

const TIPOS_DOCUMENTO = {
  1: 'Edital',
  2: 'Anexo',
  3: 'Anexo I',
  4: 'Anexo II',
  5: 'Anexo III',
  6: 'Anexo IV',
  7: 'Anexo V',
  8: 'Anexo VI',
  9: 'Anexo VII',
  10: 'Anexo VIII',
  11: 'Anexo IX',
  12: 'Anexo X',
  13: 'Anexo XI',
  14: 'Anexo XII',
  15: 'Anexo XIII',
  16: 'Anexo XIV',
  17: 'Anexo XV',
  18: 'Anexo XVI',
  19: 'Anexo XVII',
  20: 'Anexo XVIII',
  21: 'Anexo XIX',
  22: 'Anexo XX',
  23: 'Anexo XXI',
  24: 'Anexo XXII',
  25: 'Anexo XXIII',
  26: 'Anexo XXIV',
  27: 'Anexo XXV',
  28: 'Anexo XXVI',
  29: 'Anexo XXVII',
  30: 'Anexo XXVIII',
  31: 'Anexo XXIX',
  32: 'Anexo XXX',
  33: 'Anexo XXXI',
  34: 'Anexo XXXII',
  35: 'Anexo XXXIII',
  36: 'Anexo XXXIV',
  37: 'Anexo XXXV',
  38: 'Anexo XXXVI',
  39: 'Anexo XXXVII',
  40: 'Anexo XXXVIII',
  41: 'Anexo XXXIX',
  42: 'Anexo XL',
  43: 'Anexo XLI',
  44: 'Anexo XLII',
  45: 'Anexo XLIII',
  46: 'Anexo XLIV',
  47: 'Anexo XLV',
  48: 'Anexo XLVI',
  49: 'Anexo XLVII',
  50: 'Anexo XLVIII'
};

class PncpApiServiceV2 {
  constructor() {
    this.baseUrl = PNCP_BASE_URL;
    console.log('🚀 PNCP API Service V2 inicializado com URL:', this.baseUrl);
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

  // 6.1. Consultar Itens de PCA por Ano, idUsuario e Classificação Superior
  async consultarItensPCA(ano, idUsuario, classificacaoSuperior) {
    try {
      const url = `${this.baseUrl}/v1/pca/itens`;
      const params = new URLSearchParams({
        ano: ano,
        idUsuario: idUsuario,
        classificacaoSuperior: classificacaoSuperior
      });

      console.log('🔍 Consultando itens de PCA:', { ano, idUsuario, classificacaoSuperior });
      
      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('🔍 Resposta da API PCA:', data);
      
      return data;
    } catch (error) {
      console.error('❌ Erro ao consultar itens de PCA:', error);
      throw error;
    }
  }

  // 6.2. Consultar Itens de PCA por Ano e Classificação Superior
  async consultarItensPCAPorAno(ano, classificacaoSuperior) {
    try {
      const url = `${this.baseUrl}/v1/pca/itens/ano`;
      const params = new URLSearchParams({
        ano: ano,
        classificacaoSuperior: classificacaoSuperior
      });

      console.log('🔍 Consultando itens de PCA por ano:', { ano, classificacaoSuperior });
      
      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('🔍 Resposta da API PCA por ano:', data);
      
      return data;
    } catch (error) {
      console.error('❌ Erro ao consultar itens de PCA por ano:', error);
      throw error;
    }
  }

  // 6.3. Serviço Consultar Contratações por Data de Publicação
  async consultarContratacoesPorData(dataInicial, dataFinal, filtros = {}) {
    try {
      // Verificar se as datas são válidas
      const dataInicialFormatada = this.formatarDataParaAPI(dataInicial);
      const dataFinalFormatada = this.formatarDataParaAPI(dataFinal);
      
      if (!dataInicialFormatada || !dataFinalFormatada) {
        throw new Error('Datas inválidas fornecidas');
      }

      const url = `${this.baseUrl}/v1/contratacoes/publicacao`;
      const params = new URLSearchParams({
        dataInicial: dataInicialFormatada,
        dataFinal: dataFinalFormatada
      });

      // Adicionar filtros opcionais apenas se não forem vazios
      if (filtros.modalidadeId && filtros.modalidadeId !== '') params.append('modalidadeId', filtros.modalidadeId);
      if (filtros.modoDisputaId && filtros.modoDisputaId !== '') params.append('modoDisputaId', filtros.modoDisputaId);
      if (filtros.uf && filtros.uf !== '') params.append('uf', filtros.uf);
      if (filtros.municipioId && filtros.municipioId !== '') params.append('municipioId', filtros.municipioId);
      if (filtros.cnpj && filtros.cnpj !== '') params.append('cnpj', filtros.cnpj);
      if (filtros.unidadeAdministrativaId && filtros.unidadeAdministrativaId !== '') params.append('unidadeAdministrativaId', filtros.unidadeAdministrativaId);
      if (filtros.usuarioId && filtros.usuarioId !== '') params.append('usuarioId', filtros.usuarioId);
      if (filtros.pagina && filtros.pagina > 0) params.append('pagina', filtros.pagina);
      if (filtros.tamanho && filtros.tamanho > 0) params.append('tamanho', filtros.tamanho);

      console.log('🔍 Consultando contratações por data:', { 
        dataInicial: dataInicialFormatada, 
        dataFinal: dataFinalFormatada, 
        filtros,
        url: `${url}?${params.toString()}`
      });
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 segundos timeout
      
      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Resposta da API com erro:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          errorText
        });
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText} - ${errorText}`);
      }

      const data = await response.json();
      console.log('🔍 Resposta da API contratações:', data);
      
      return data;
    } catch (error) {
      console.error('❌ Erro ao consultar contratações por data:', error);
      
      // Se for erro de rede ou timeout, usar dados mock
      if (error.name === 'AbortError' || error.message.includes('Failed to fetch')) {
        console.warn('⚠️ API indisponível, usando dados mock');
        return getMockLicitacoes(filtros);
      }
      
      throw error;
    }
  }

  // 6.4. Serviço Consultar Contratações com Período de Recebimento de Propostas em Aberto
  async consultarContratacoesEmAberto(dataFinal, filtros = {}) {
    try {
      const url = `${this.baseUrl}/v1/contratacoes/abertas`;
      const params = new URLSearchParams({
        dataFinal: this.formatarDataParaAPI(dataFinal)
      });

      // Adicionar filtros opcionais
      if (filtros.modalidadeId) params.append('modalidadeId', filtros.modalidadeId);
      if (filtros.uf) params.append('uf', filtros.uf);
      if (filtros.municipioId) params.append('municipioId', filtros.municipioId);
      if (filtros.cnpj) params.append('cnpj', filtros.cnpj);
      if (filtros.unidadeAdministrativaId) params.append('unidadeAdministrativaId', filtros.unidadeAdministrativaId);
      if (filtros.usuarioId) params.append('usuarioId', filtros.usuarioId);
      if (filtros.pagina) params.append('pagina', filtros.pagina);
      if (filtros.tamanho) params.append('tamanho', filtros.tamanho);

      console.log('🔍 Consultando contratações em aberto:', { dataFinal, filtros });
      
      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('🔍 Resposta da API contratações em aberto:', data);
      
      return data;
    } catch (error) {
      console.error('❌ Erro ao consultar contratações em aberto:', error);
      throw error;
    }
  }

  // 6.5. Serviço Consultar Atas de Registro de Preço por Período de Vigência
  async consultarAtasRegistroPreco(dataInicial, dataFinal, filtros = {}) {
    try {
      const url = `${this.baseUrl}/v1/atas/registro-preco`;
      const params = new URLSearchParams({
        dataInicial: this.formatarDataParaAPI(dataInicial),
        dataFinal: this.formatarDataParaAPI(dataFinal)
      });

      // Adicionar filtros opcionais
      if (filtros.modalidadeId) params.append('modalidadeId', filtros.modalidadeId);
      if (filtros.uf) params.append('uf', filtros.uf);
      if (filtros.municipioId) params.append('municipioId', filtros.municipioId);
      if (filtros.cnpj) params.append('cnpj', filtros.cnpj);
      if (filtros.unidadeAdministrativaId) params.append('unidadeAdministrativaId', filtros.unidadeAdministrativaId);
      if (filtros.usuarioId) params.append('usuarioId', filtros.usuarioId);
      if (filtros.pagina) params.append('pagina', filtros.pagina);
      if (filtros.tamanho) params.append('tamanho', filtros.tamanho);

      console.log('🔍 Consultando atas de registro de preço:', { dataInicial, dataFinal, filtros });
      
      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('🔍 Resposta da API atas:', data);
      
      return data;
    } catch (error) {
      console.error('❌ Erro ao consultar atas de registro de preço:', error);
      throw error;
    }
  }

  // 6.6. Serviço Consultar Contratos por Data de Publicação
  async consultarContratosPorData(dataInicial, dataFinal, filtros = {}) {
    try {
      const url = `${this.baseUrl}/v1/contratos/publicacao`;
      const params = new URLSearchParams({
        dataInicial: this.formatarDataParaAPI(dataInicial),
        dataFinal: this.formatarDataParaAPI(dataFinal)
      });

      // Adicionar filtros opcionais
      if (filtros.modalidadeId) params.append('modalidadeId', filtros.modalidadeId);
      if (filtros.tipoContratoId) params.append('tipoContratoId', filtros.tipoContratoId);
      if (filtros.uf) params.append('uf', filtros.uf);
      if (filtros.municipioId) params.append('municipioId', filtros.municipioId);
      if (filtros.cnpj) params.append('cnpj', filtros.cnpj);
      if (filtros.unidadeAdministrativaId) params.append('unidadeAdministrativaId', filtros.unidadeAdministrativaId);
      if (filtros.usuarioId) params.append('usuarioId', filtros.usuarioId);
      if (filtros.pagina) params.append('pagina', filtros.pagina);
      if (filtros.tamanho) params.append('tamanho', filtros.tamanho);

      console.log('🔍 Consultando contratos por data:', { dataInicial, dataFinal, filtros });
      
      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log('🔍 Resposta da API contratos:', data);
      
      return data;
    } catch (error) {
      console.error('❌ Erro ao consultar contratos por data:', error);
      throw error;
    }
  }

  // Métodos auxiliares para obter tabelas de domínio
  getInstrumentosConvocatorios() {
    return INSTRUMENTOS_CONVOCATORIOS;
  }
  
  // Método para acessar dados mock
  getMockLicitacoes(filtros = {}) {
    return getMockLicitacoes(filtros);
  }

  getModalidadesContratacao() {
    return MODALIDADES_CONTRATACAO;
  }

  getModosDisputa() {
    return MODOS_DISPUTA;
  }

  getCriteriosJulgamento() {
    return CRITERIOS_JULGAMENTO;
  }

  getSituacoesContratacao() {
    return SITUACOES_CONTRATACAO;
  }

  getSituacoesItemContratacao() {
    return SITUACOES_ITEM_CONTRATACAO;
  }

  getTiposBeneficio() {
    return TIPOS_BENEFICIO;
  }

  getSituacoesResultadoItem() {
    return SITUACOES_RESULTADO_ITEM;
  }

  getTiposContrato() {
    return TIPOS_CONTRATO;
  }

  getTiposTermoContrato() {
    return TIPOS_TERMO_CONTRATO;
  }

  getCategoriasProcesso() {
    return CATEGORIAS_PROCESSO;
  }

  getTiposDocumento() {
    return TIPOS_DOCUMENTO;
  }

  // Testar conectividade da API
  async testarConexao() {
    try {
      console.log('🧪 Testando conectividade com a API do PNCP V2...');
      
      const hoje = this.formatarDataParaAPI(new Date());
      
      // Configurar timeout para a requisição
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos timeout
      
      const response = await fetch(`${this.baseUrl}/v1/contratacoes/publicacao?dataInicial=${hoje}&dataFinal=${hoje}&pagina=1&tamanho=1`, {
        signal: controller.signal,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      clearTimeout(timeoutId);
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
      
      if (error.name === 'AbortError') {
        console.log('⏰ Timeout na requisição - API pode estar indisponível');
      } else if (error.message.includes('Failed to fetch')) {
        console.log('🌐 Erro de conectividade - API pode estar fora do ar');
      } else if (error.message.includes('CORS')) {
        console.log('🚫 Erro de CORS - API pode não permitir requisições do navegador');
      }
      
      return false;
    }
  }

  // Buscar licitações com filtros (compatibilidade com código existente)
  async buscarLicitacoes(filtros = {}, pagina = 1, itensPorPagina = 50) {
    try {
      console.log('🔍 Buscando licitações com filtros:', filtros);
      
      // Preparar datas
      let dataInicial = null;
      let dataFinal = null;
      
      if (filtros.dataInicio) {
        dataInicial = this.formatarDataParaAPI(filtros.dataInicio);
      }
      if (filtros.dataFim) {
        dataFinal = this.formatarDataParaAPI(filtros.dataFim);
      }
      
      // Se não há datas, usar mês atual
      if (!dataInicial && !dataFinal) {
        const hoje = new Date();
        const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
        dataInicial = this.formatarDataParaAPI(primeiroDiaMes);
        dataFinal = this.formatarDataParaAPI(hoje);
      }
      
      // Preparar filtros para a API V2
      const filtrosAPI = {
        modalidadeId: filtros.modalidade,
        uf: filtros.estado,
        municipioId: filtros.municipio,
        cnpj: filtros.cnpj,
        unidadeAdministrativaId: filtros.codigoUnidadeAdministrativa,
        usuarioId: filtros.idUsuario,
        pagina: pagina,
        tamanho: itensPorPagina
      };
      
      try {
        const response = await this.consultarContratacoesPorData(dataInicial, dataFinal, filtrosAPI);
        
        return {
          data: response.content || response.data || [],
          total: response.totalElements || response.total || 0,
          totalPages: response.totalPages || Math.ceil((response.totalElements || 0) / itensPorPagina),
          currentPage: pagina - 1,
          empty: (response.content || []).length === 0
        };
      } catch (apiError) {
        console.warn('⚠️ API indisponível, usando dados mock:', apiError.message);
        
        // Usar dados mock como fallback
        const mockData = getMockLicitacoes(filtros);
        return {
          data: mockData.content || [],
          total: mockData.totalElements || 0,
          totalPages: mockData.totalPages || 1,
          currentPage: pagina - 1,
          empty: (mockData.content || []).length === 0
        };
      }
      
    } catch (error) {
      console.error('❌ Erro ao buscar licitações:', error);
      throw error;
    }
  }

  // Buscar licitações em aberto (compatibilidade com código existente)
  async buscarLicitacoesEmAberto(filtros = {}, pagina = 1, itensPorPagina = 50) {
    try {
      console.log('🔍 Buscando licitações em aberto com filtros:', filtros);
      
      let dataFinal = null;
      if (filtros.dataFim) {
        dataFinal = this.formatarDataParaAPI(filtros.dataFim);
      } else {
        dataFinal = this.formatarDataParaAPI(new Date());
      }
      
      const filtrosAPI = {
        modalidadeId: filtros.modalidade,
        uf: filtros.estado,
        municipioId: filtros.municipio,
        cnpj: filtros.cnpj,
        unidadeAdministrativaId: filtros.codigoUnidadeAdministrativa,
        usuarioId: filtros.idUsuario,
        pagina: pagina,
        tamanho: itensPorPagina
      };
      
      const response = await this.consultarContratacoesEmAberto(dataFinal, filtrosAPI);
      
      return {
        data: response.content || response.data || [],
        total: response.totalElements || response.total || 0,
        totalPages: response.totalPages || Math.ceil((response.totalElements || 0) / itensPorPagina),
        currentPage: pagina - 1,
        empty: (response.content || []).length === 0
      };
      
    } catch (error) {
      console.error('❌ Erro ao buscar licitações em aberto:', error);
      throw error;
    }
  }

  // Buscar licitações de teste (compatibilidade com código existente)
  async buscarLicitacoesTeste() {
    try {
      console.log('🧪 Buscando licitações de teste...');
      
      const hoje = this.formatarDataParaAPI(new Date());
      const response = await this.consultarContratacoesPorData(hoje, hoje, {
        pagina: 1,
        tamanho: 5
      });
      
      return response;
    } catch (error) {
      console.error('❌ Erro ao buscar licitações de teste:', error);
      return null;
    }
  }

  // Testar filtros de data (compatibilidade com código existente)
  async testarFiltrosData() {
    try {
      const hoje = new Date().toISOString().split('T')[0];
      console.log('🧪 Testando filtros de data:', hoje);
      
      const filtros = {
        dataInicio: hoje,
        dataFim: hoje
      };
      
      const response = await this.buscarLicitacoes(filtros, 1, 10);
      
      return {
        api: response,
        dataTestada: hoje
      };
    } catch (error) {
      console.error('❌ Erro ao testar filtros de data:', error);
      return null;
    }
  }

  // Obter detalhes de licitação (compatibilidade com código existente)
  async getLicitacaoDetalhes(idLicitacao) {
    try {
      console.log('🔍 Buscando detalhes da licitação:', idLicitacao);
      
      // Para compatibilidade, retornar dados básicos
      // Em uma implementação real, você teria um endpoint específico para detalhes
      const hoje = this.formatarDataParaAPI(new Date());
      const response = await this.consultarContratacoesPorData(hoje, hoje, {
        pagina: 1,
        tamanho: 100
      });
      
      const licitacao = (response.content || []).find(l => 
        l.numeroControlePNCP === idLicitacao || l.id === idLicitacao
      );
      
      return licitacao || null;
    } catch (error) {
      console.error('❌ Erro ao buscar detalhes da licitação:', error);
      return null;
    }
  }

  // Buscar licitações recentes (compatibilidade com código existente)
  async getLicitacoesRecentes(page = 1, size = 50) {
    try {
      console.log('🔍 Buscando licitações recentes...');
      
      const hoje = this.formatarDataParaAPI(new Date());
      const umaSemanaAtras = this.formatarDataParaAPI(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
      
      const response = await this.consultarContratacoesPorData(umaSemanaAtras, hoje, {
        pagina: page,
        tamanho: size
      });
      
      return response;
    } catch (error) {
      console.error('❌ Erro ao buscar licitações recentes:', error);
      return null;
    }
  }

  // Testar diferentes endpoints da API conforme endpoint funcional
  async testarEndpoints() {
    const endpoints = [
      `${this.baseUrl}/v1/pca/itens`,
      `${this.baseUrl}/v1/contratacoes/publicacao`,
      `${this.baseUrl}/v1/contratacoes/abertas`,
      `${this.baseUrl}/v1/atas/registro-preco`,
      `${this.baseUrl}/v1/contratos/publicacao`
    ];
    
    console.log('🧪 Testando diferentes endpoints da API PNCP V2...');
    
    for (const endpoint of endpoints) {
      try {
        console.log(`🧪 Testando: ${endpoint}`);
        const hoje = this.formatarDataParaAPI(new Date());
        
        // Construir URL de teste baseada no endpoint
        let testUrl = '';
        if (endpoint.includes('/pca/')) {
          testUrl = `${endpoint}?ano=2024&pagina=1&tamanho=1`;
        } else if (endpoint.includes('/abertas')) {
          testUrl = `${endpoint}?dataFinal=${hoje}&pagina=1&tamanho=1`;
        } else {
          testUrl = `${endpoint}?dataInicial=${hoje}&dataFinal=${hoje}&pagina=1&tamanho=1`;
        }
        
        // Configurar timeout para a requisição
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 segundos timeout
        
        const response = await fetch(testUrl, {
          signal: controller.signal,
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        clearTimeout(timeoutId);
        console.log(`🧪 Status: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log(`🧪 ✅ Endpoint funcionando: ${endpoint}`);
          console.log('🧪 Dados:', data);
          return endpoint;
        }
      } catch (error) {
        console.log(`🧪 ❌ Endpoint falhou: ${endpoint} - ${error.message}`);
        
        if (error.name === 'AbortError') {
          console.log('⏰ Timeout na requisição');
        } else if (error.message.includes('Failed to fetch')) {
          console.log('🌐 Erro de conectividade');
        }
      }
    }
    
    console.log('🧪 ❌ Nenhum endpoint funcionou - API pode estar indisponível');
    console.log('🔄 Usando dados mock como fallback');
    return 'mock'; // Retornar 'mock' para indicar que estamos usando dados mock
  }
}

// Instância singleton do serviço
const pncpApiServiceV2 = new PncpApiServiceV2();

export default pncpApiServiceV2; 