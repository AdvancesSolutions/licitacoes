# Integração da API PNCP - Portal Nacional de Contratações Públicas

## 📋 Visão Geral

Este documento descreve a integração completa da API do PNCP (Portal Nacional de Contratações Públicas) no projeto, seguindo o **Manual das APIs de Consultas PNCP - Versão 1.0**.

## 🎯 Objetivo

Implementar uma integração robusta e completa com a API do PNCP para fornecer acesso a dados de licitações públicas, contratos, atas de registro de preço e informações de PCA (Plano de Contratações Anual).

## 🔗 Endpoints Implementados

### 1. Consultar Itens de PCA por Ano, idUsuario e Classificação Superior
- **Endpoint**: `/v1/pca/itens`
- **Método**: GET
- **Parâmetros Obrigatórios**:
  - `ano`: Ano do PCA
  - `idUsuario`: ID do usuário
  - `classificacaoSuperior`: Classificação superior dos itens

### 2. Consultar Itens de PCA por Ano e Classificação Superior
- **Endpoint**: `/v1/pca/itens/ano`
- **Método**: GET
- **Parâmetros Obrigatórios**:
  - `ano`: Ano do PCA
  - `classificacaoSuperior`: Classificação superior dos itens

### 3. Consultar Contratações por Data de Publicação
- **Endpoint**: `/v1/contratacoes/publicacao`
- **Método**: GET
- **Parâmetros Obrigatórios**:
  - `dataInicial`: Data inicial (formato AAAAMMDD)
  - `dataFinal`: Data final (formato AAAAMMDD)
- **Parâmetros Opcionais**:
  - `modalidadeId`: ID da modalidade de contratação
  - `modoDisputaId`: ID do modo de disputa
  - `uf`: Sigla do estado
  - `municipioId`: ID do município
  - `cnpj`: CNPJ do órgão
  - `unidadeAdministrativaId`: ID da unidade administrativa
  - `usuarioId`: ID do usuário
  - `pagina`: Número da página
  - `tamanho`: Tamanho da página

### 4. Consultar Contratações com Período de Recebimento de Propostas em Aberto
- **Endpoint**: `/v1/contratacoes/abertas`
- **Método**: GET
- **Parâmetros Obrigatórios**:
  - `dataFinal`: Data final (formato AAAAMMDD)
- **Parâmetros Opcionais**:
  - `modalidadeId`: ID da modalidade de contratação
  - `uf`: Sigla do estado
  - `municipioId`: ID do município
  - `cnpj`: CNPJ do órgão
  - `unidadeAdministrativaId`: ID da unidade administrativa
  - `usuarioId`: ID do usuário
  - `pagina`: Número da página
  - `tamanho`: Tamanho da página

### 5. Consultar Atas de Registro de Preço por Período de Vigência
- **Endpoint**: `/v1/atas/registro-preco`
- **Método**: GET
- **Parâmetros Obrigatórios**:
  - `dataInicial`: Data inicial (formato AAAAMMDD)
  - `dataFinal`: Data final (formato AAAAMMDD)
- **Parâmetros Opcionais**:
  - `modalidadeId`: ID da modalidade de contratação
  - `uf`: Sigla do estado
  - `municipioId`: ID do município
  - `cnpj`: CNPJ do órgão
  - `unidadeAdministrativaId`: ID da unidade administrativa
  - `usuarioId`: ID do usuário
  - `pagina`: Número da página
  - `tamanho`: Tamanho da página

### 6. Consultar Contratos por Data de Publicação
- **Endpoint**: `/v1/contratos/publicacao`
- **Método**: GET
- **Parâmetros Obrigatórios**:
  - `dataInicial`: Data inicial (formato AAAAMMDD)
  - `dataFinal`: Data final (formato AAAAMMDD)
- **Parâmetros Opcionais**:
  - `modalidadeId`: ID da modalidade de contratação
  - `tipoContratoId`: ID do tipo de contrato
  - `uf`: Sigla do estado
  - `municipioId`: ID do município
  - `cnpj`: CNPJ do órgão
  - `unidadeAdministrativaId`: ID da unidade administrativa
  - `usuarioId`: ID do usuário
  - `pagina`: Número da página
  - `tamanho`: Tamanho da página

## 📊 Tabelas de Domínio Implementadas

### Instrumentos Convocatórios
- Edital
- Aviso de Licitação
- Convocação
- Convite
- Carta Convite
- Aviso de Manifestação de Interesse
- Aviso de Credenciamento
- Aviso de Pré-qualificação
- Aviso de Diálogo Competitivo
- Aviso de Concurso
- Aviso de Leilão

### Modalidades de Contratação
- Leilão - Eletrônico
- Diálogo Competitivo
- Concurso
- Concorrência - Eletrônica
- Concorrência - Presencial
- Pregão - Eletrônico
- Pregão - Presencial
- Dispensa de Licitação
- Inexigibilidade
- Manifestação de Interesse
- Pré-qualificação
- Credenciamento
- Leilão - Presencial

### Modos de Disputa
- Aberto
- Fechado
- Aberto-Fechado
- Dispensa Com Disputa
- Não se aplica
- Fechado-Aberto

### Critérios de Julgamento
- Menor Preço
- Maior Desconto
- Melhor Técnica
- Técnica e Preço
- Maior Lance ou Oferta
- Melhor Conteúdo Artístico
- Maior Retorno Econômico
- Maior Eficiência Energética
- E outros critérios combinados

### Situações de Contratação
- Divulgada no PNCP
- Revogada
- Anulada
- Suspensa

### Tipos de Contrato
- Contrato
- Termo de Contrato
- Acordo
- Convênio
- Ajuste
- Termo de Compromisso
- Termo de Fomento
- Termo de Colaboração
- Termo de Parceria
- Termo de Cooperação

## 🛠️ Implementação Técnica

### Serviço Principal
O serviço principal está localizado em `src/services/pncpApiV2.js` e implementa:

```javascript
class PncpApiServiceV2 {
  // Formatação de data para o formato AAAAMMDD
  formatarDataParaAPI(data) {
    if (!data) return null;
    const d = new Date(data);
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const dia = String(d.getDate()).padStart(2, '0');
    return `${ano}${mes}${dia}`;
  }

  // Métodos para cada endpoint da API
  async consultarItensPCA(ano, idUsuario, classificacaoSuperior) { ... }
  async consultarItensPCAPorAno(ano, classificacaoSuperior) { ... }
  async consultarContratacoesPorData(dataInicial, dataFinal, filtros) { ... }
  async consultarContratacoesEmAberto(dataFinal, filtros) { ... }
  async consultarAtasRegistroPreco(dataInicial, dataFinal, filtros) { ... }
  async consultarContratosPorData(dataInicial, dataFinal, filtros) { ... }
}
```

### Páginas Implementadas

#### 1. Página Principal de Licitações (`/licitacoes`)
- Lista de licitações com filtros
- Estatísticas em tempo real
- Paginação
- Busca por modalidade, estado, data, etc.

#### 2. Página de Detalhes (`/licitacoes/detalhes/:id`)
- Informações detalhadas da licitação
- Documentos anexos
- Cronograma
- Contatos

#### 3. Página de Teste da API (`/licitacoes/teste-api`)
- Interface para testar todos os endpoints
- Visualização de tabelas de domínio
- Logs de resultados
- Status de conectividade

## 🔧 Configuração

### URL Base
```javascript
const PNCP_BASE_URL = 'https://pncp.gov.br/api/consulta';
```

### Headers Padrão
```javascript
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
```

### Formato de Data
Todas as datas são formatadas para o padrão `AAAAMMDD` conforme especificação da API.

## 📱 Interface de Usuário

### Componentes Principais
1. **Cards de Estatísticas**: Exibem totais de licitações, valores, status
2. **Tabela de Licitações**: Lista paginada com filtros
3. **Filtros Avançados**: Por modalidade, estado, data, valor
4. **Gráficos**: Visualização de dados em tempo real
5. **Página de Teste**: Interface para testar a API

### Responsividade
- Layout responsivo para desktop, tablet e mobile
- Componentes adaptáveis
- Navegação otimizada

## 🧪 Testes

### Página de Teste da API
Acesse `/licitacoes/teste-api` para:

1. **Testar Conectividade**: Verificar se a API está acessível
2. **Testar Endpoints**: Executar consultas em todos os endpoints
3. **Visualizar Tabelas**: Consultar tabelas de domínio
4. **Ver Resultados**: Logs detalhados de cada teste

### Exemplo de Uso
```javascript
// Testar consulta de contratações
const resultado = await pncpApiService.consultarContratacoesPorData(
  '2024-01-01',
  '2024-12-31',
  {
    modalidadeId: 6, // Pregão - Eletrônico
    uf: 'SP',
    pagina: 1,
    tamanho: 20
  }
);
```

## 🔍 Monitoramento

### Logs
- Console logs detalhados para debugging
- Status de conectividade em tempo real
- Tratamento de erros robusto

### Métricas
- Tempo de resposta da API
- Taxa de sucesso das requisições
- Dados de uso por endpoint

## 🚀 Deploy

### Produção
1. Configurar URL base da API
2. Implementar cache para otimização
3. Configurar monitoramento
4. Testar conectividade

### Desenvolvimento
1. Usar dados mock como fallback
2. Implementar logs detalhados
3. Testar todos os endpoints
4. Validar formatos de data

## 📚 Documentação Adicional

- **Manual PNCP**: [Manual das APIs de Consultas PNCP - Versão 1.0]
- **API Reference**: Documentação oficial do PNCP
- **Exemplos**: Página de teste com exemplos práticos

## 🔄 Atualizações

### Versão 2.0 (Atual)
- Implementação completa de todos os endpoints
- Tabelas de domínio atualizadas
- Interface de teste integrada
- Tratamento de erros robusto

### Próximas Versões
- Cache inteligente
- Webhooks para atualizações em tempo real
- Integração com outros sistemas
- Relatórios avançados

## 📞 Suporte

Para dúvidas sobre a integração:
1. Consulte a página de teste da API
2. Verifique os logs do console
3. Teste a conectividade
4. Consulte a documentação oficial do PNCP

---

**Desenvolvido seguindo o Manual das APIs de Consultas PNCP - Versão 1.0** 