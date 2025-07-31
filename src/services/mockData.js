// Dados mock para simular a API do PNCP
// Baseado no Manual das APIs de Consultas PNCP – Versão 1.0
// Usado quando a API real não está disponível

const mockLicitacoes = [
  {
    // Estrutura conforme API oficial do PNCP
    numeroControlePNCP: '12345678901234-1-000001/2025',
    numeroCompra: '001/2025',
    anoCompra: 2025,
    processo: '2025/001',
    tipoInstrumentoConvocatorioId: 1,
    tipoInstrumentoConvocatorioNome: 'Edital',
    modalidadeId: 6,
    modalidadeNome: 'Pregão - Eletrônico',
    modoDisputaId: 1,
    modoDisputaNome: 'Aberto',
    situacaoCompraId: 1,
    situacaoCompraNome: 'Divulgada no PNCP',
    objetoCompra: 'Aquisição de equipamentos de informática para escolas municipais',
    informacaoComplementar: 'Aquisição de computadores, impressoras e equipamentos de rede para 50 escolas municipais',
    srp: false,
    amparoLegal: {
      codigo: 1,
      nome: 'Lei 14.133/2021, Art. 28, I',
      descricao: 'Aquisição de bens e contratação de serviços comuns'
    },
    valorTotalEstimado: 1500000.00,
    valorTotalHomologado: 0.00,
    dataAberturaProposta: '2025-01-15T10:00:00Z',
    dataEncerramentoProposta: '2025-02-15T18:00:00Z',
    dataPublicacaoPncp: '2025-01-15T10:00:00Z',
    dataInclusao: '2025-01-15T10:00:00Z',
    dataAtualizacao: '2025-01-15T10:00:00Z',
    sequencialCompra: 1,
    orgaoEntidade: {
      cnpj: '12345678000195',
      razaosocial: 'Prefeitura Municipal de São Paulo',
      poderId: 'E',
      esferaId: 'M'
    },
    unidadeOrgao: {
      codigoUnidade: '001',
      nomeUnidade: 'Secretaria Municipal de Educação',
      codigoIbge: 3550308,
      municipioNome: 'São Paulo',
      ufSigla: 'SP',
      ufNome: 'São Paulo'
    },
    usuarioNome: 'Sistema de Compras SP',
    linkSistemaOrigem: 'https://example.com/sistema1',
    justificativaPresencial: null,
    // Dados adicionais para compatibilidade
    id: 1,
    orgao: 'Prefeitura Municipal de São Paulo',
    objeto: 'Aquisição de equipamentos de informática para escolas municipais',
    modalidade: 'PREGÃO_ELETRÔNICO',
    status: 'ABERTA',
    valorEstimado: 1500000,
    dataAbertura: '2025-01-15T10:00:00Z',
    dataEncerramento: '2025-02-15T18:00:00Z',
    numero: '001/2025',
    ano: 2025,
    municipio: 'São Paulo',
    estado: 'SP',
    totalPropostas: 12,
    propostasValidas: 8,
    urlEdital: 'https://example.com/edital1.pdf',
    urlSistema: 'https://example.com/sistema1',
    urlOrgao: 'https://www.prefeitura.sp.gov.br',
    contato: {
      nome: 'João Silva',
      cargo: 'Coordenador de Licitações',
      telefone: '(11) 3333-4444',
      email: 'licitacoes@prefeitura.sp.gov.br'
    },
    cronograma: [
      {
        titulo: 'Publicação do Edital',
        data: '2025-01-15T10:00:00Z',
        descricao: 'Edital publicado no Diário Oficial'
      },
      {
        titulo: 'Sessão de Esclarecimentos',
        data: '2025-01-25T14:00:00Z',
        descricao: 'Sessão para esclarecimento de dúvidas'
      },
      {
        titulo: 'Abertura das Propostas',
        data: '2025-02-15T18:00:00Z',
        descricao: 'Abertura e julgamento das propostas'
      }
    ],
    documentos: [
      {
        id: 1,
        nome: 'Edital Completo',
        tipo: 'PDF',
        url: 'https://example.com/edital1.pdf'
      },
      {
        id: 2,
        nome: 'Anexo I - Especificações',
        tipo: 'PDF',
        url: 'https://example.com/anexo1.pdf'
      }
    ]
  },
  {
    numeroControlePNCP: '12345678901234-1-000002/2025',
    numeroCompra: '002/2025',
    anoCompra: 2025,
    processo: '2025/002',
    tipoInstrumentoConvocatorioId: 1,
    tipoInstrumentoConvocatorioNome: 'Edital',
    modalidadeId: 7,
    modalidadeNome: 'Pregão - Presencial',
    modoDisputaId: 1,
    modoDisputaNome: 'Aberto',
    situacaoCompraId: 1,
    situacaoCompraNome: 'Divulgada no PNCP',
    objetoCompra: 'Construção de ponte sobre o rio Tietê',
    informacaoComplementar: 'Construção de ponte de 200 metros com 4 faixas de rolamento',
    srp: false,
    amparoLegal: {
      codigo: 1,
      nome: 'Lei 14.133/2021, Art. 28, I',
      descricao: 'Aquisição de bens e contratação de serviços comuns'
    },
    valorTotalEstimado: 8500000.00,
    valorTotalHomologado: 0.00,
    dataAberturaProposta: '2025-01-20T14:00:00Z',
    dataEncerramentoProposta: '2025-03-20T18:00:00Z',
    dataPublicacaoPncp: '2025-01-20T14:00:00Z',
    dataInclusao: '2025-01-20T14:00:00Z',
    dataAtualizacao: '2025-01-20T14:00:00Z',
    sequencialCompra: 2,
    orgaoEntidade: {
      cnpj: '12345678000195',
      razaosocial: 'Prefeitura Municipal de São Paulo',
      poderId: 'E',
      esferaId: 'M'
    },
    unidadeOrgao: {
      codigoUnidade: '002',
      nomeUnidade: 'Secretaria Municipal de Infraestrutura',
      codigoIbge: 3550308,
      municipioNome: 'São Paulo',
      ufSigla: 'SP',
      ufNome: 'São Paulo'
    },
    usuarioNome: 'Sistema de Compras SP',
    linkSistemaOrigem: 'https://example.com/sistema1',
    justificativaPresencial: 'Complexidade técnica requer presença física',
    // Dados adicionais para compatibilidade
    id: 2,
    orgao: 'Prefeitura Municipal de São Paulo',
    objeto: 'Construção de ponte sobre o rio Tietê',
    modalidade: 'PREGÃO_PRESENCIAL',
    status: 'ABERTA',
    valorEstimado: 8500000,
    dataAbertura: '2025-01-20T14:00:00Z',
    dataEncerramento: '2025-03-20T18:00:00Z',
    numero: '002/2025',
    ano: 2025,
    municipio: 'São Paulo',
    estado: 'SP',
    totalPropostas: 8,
    propostasValidas: 6,
    urlEdital: 'https://example.com/edital2.pdf',
    urlSistema: 'https://example.com/sistema1',
    urlOrgao: 'https://www.prefeitura.sp.gov.br',
    contato: {
      nome: 'Maria Santos',
      cargo: 'Engenheira Civil',
      telefone: '(11) 3333-5555',
      email: 'engenharia@prefeitura.sp.gov.br'
    },
    cronograma: [
      {
        titulo: 'Publicação do Edital',
        data: '2025-01-20T14:00:00Z',
        descricao: 'Edital publicado no Diário Oficial'
      },
      {
        titulo: 'Visita Técnica',
        data: '2025-02-10T09:00:00Z',
        descricao: 'Visita ao local da obra'
      },
      {
        titulo: 'Abertura das Propostas',
        data: '2025-03-20T18:00:00Z',
        descricao: 'Abertura e julgamento das propostas'
      }
    ],
    documentos: [
      {
        id: 3,
        nome: 'Edital Completo',
        tipo: 'PDF',
        url: 'https://example.com/edital2.pdf'
      },
      {
        id: 4,
        nome: 'Projeto Executivo',
        tipo: 'PDF',
        url: 'https://example.com/projeto.pdf'
      }
    ]
  },
  {
    numeroControlePNCP: '12345678901234-1-000003/2025',
    numeroCompra: '003/2025',
    anoCompra: 2025,
    processo: '2025/003',
    tipoInstrumentoConvocatorioId: 1,
    tipoInstrumentoConvocatorioNome: 'Edital',
    modalidadeId: 6,
    modalidadeNome: 'Pregão - Eletrônico',
    modoDisputaId: 1,
    modoDisputaNome: 'Aberto',
    situacaoCompraId: 1,
    situacaoCompraNome: 'Divulgada no PNCP',
    objetoCompra: 'Aquisição de medicamentos para rede hospitalar',
    informacaoComplementar: 'Aquisição de medicamentos de alto custo para 20 hospitais municipais',
    srp: false,
    amparoLegal: {
      codigo: 1,
      nome: 'Lei 14.133/2021, Art. 28, I',
      descricao: 'Aquisição de bens e contratação de serviços comuns'
    },
    valorTotalEstimado: 3200000.00,
    valorTotalHomologado: 0.00,
    dataAberturaProposta: '2025-01-25T09:00:00Z',
    dataEncerramentoProposta: '2025-02-25T17:00:00Z',
    dataPublicacaoPncp: '2025-01-25T09:00:00Z',
    dataInclusao: '2025-01-25T09:00:00Z',
    dataAtualizacao: '2025-01-25T09:00:00Z',
    sequencialCompra: 3,
    orgaoEntidade: {
      cnpj: '12345678000195',
      razaosocial: 'Prefeitura Municipal de São Paulo',
      poderId: 'E',
      esferaId: 'M'
    },
    unidadeOrgao: {
      codigoUnidade: '003',
      nomeUnidade: 'Secretaria Municipal de Saúde',
      codigoIbge: 3550308,
      municipioNome: 'São Paulo',
      ufSigla: 'SP',
      ufNome: 'São Paulo'
    },
    usuarioNome: 'Sistema de Compras SP',
    linkSistemaOrigem: 'https://example.com/sistema1',
    justificativaPresencial: null,
    // Dados adicionais para compatibilidade
    id: 3,
    orgao: 'Prefeitura Municipal de São Paulo',
    objeto: 'Aquisição de medicamentos para rede hospitalar',
    modalidade: 'PREGÃO_ELETRÔNICO',
    status: 'ABERTA',
    valorEstimado: 3200000,
    dataAbertura: '2025-01-25T09:00:00Z',
    dataEncerramento: '2025-02-25T17:00:00Z',
    numero: '003/2025',
    ano: 2025,
    municipio: 'São Paulo',
    estado: 'SP',
    totalPropostas: 15,
    propostasValidas: 12,
    urlEdital: 'https://example.com/edital3.pdf',
    urlSistema: 'https://example.com/sistema1',
    urlOrgao: 'https://www.prefeitura.sp.gov.br',
    contato: {
      nome: 'Dr. Carlos Oliveira',
      cargo: 'Coordenador de Compras Hospitalares',
      telefone: '(11) 3333-6666',
      email: 'compras.saude@prefeitura.sp.gov.br'
    },
    cronograma: [
      {
        titulo: 'Publicação do Edital',
        data: '2025-01-25T09:00:00Z',
        descricao: 'Edital publicado no Diário Oficial'
      },
      {
        titulo: 'Sessão de Esclarecimentos',
        data: '2025-02-05T14:00:00Z',
        descricao: 'Sessão para esclarecimento de dúvidas'
      },
      {
        titulo: 'Abertura das Propostas',
        data: '2025-02-25T17:00:00Z',
        descricao: 'Abertura e julgamento das propostas'
      }
    ],
    documentos: [
      {
        id: 5,
        nome: 'Edital Completo',
        tipo: 'PDF',
        url: 'https://example.com/edital3.pdf'
      },
      {
        id: 6,
        nome: 'Anexo - Lista de Medicamentos',
        tipo: 'PDF',
        url: 'https://example.com/medicamentos.pdf'
      }
    ]
  }
];

// Licitações adicionais com datas mais recentes
const licitacoesAdicionais = [
  {
    numeroControlePNCP: '12345678901234-1-000004/2025',
    numeroCompra: '004/2025',
    anoCompra: 2025,
    processo: '2025/004',
    tipoInstrumentoConvocatorioId: 1,
    tipoInstrumentoConvocatorioNome: 'Edital',
    modalidadeId: 6,
    modalidadeNome: 'Pregão - Eletrônico',
    modoDisputaId: 1,
    modoDisputaNome: 'Aberto',
    situacaoCompraId: 1,
    situacaoCompraNome: 'Divulgada no PNCP',
    objetoCompra: 'Contratação de serviços de limpeza urbana',
    informacaoComplementar: 'Serviços de coleta, transporte e tratamento de resíduos sólidos',
    srp: false,
    amparoLegal: {
      codigo: 1,
      nome: 'Lei 14.133/2021, Art. 28, I',
      descricao: 'Aquisição de bens e contratação de serviços comuns'
    },
    valorTotalEstimado: 4500000.00,
    valorTotalHomologado: 0.00,
    dataAberturaProposta: '2025-02-01T08:00:00Z',
    dataEncerramentoProposta: '2025-03-01T18:00:00Z',
    dataPublicacaoPncp: '2025-02-01T08:00:00Z',
    dataInclusao: '2025-02-01T08:00:00Z',
    dataAtualizacao: '2025-02-01T08:00:00Z',
    sequencialCompra: 4,
    orgaoEntidade: {
      cnpj: '12345678000195',
      razaosocial: 'Prefeitura Municipal de São Paulo',
      poderId: 'E',
      esferaId: 'M'
    },
    unidadeOrgao: {
      codigoUnidade: '004',
      nomeUnidade: 'Secretaria Municipal de Serviços',
      codigoIbge: 3550308,
      municipioNome: 'São Paulo',
      ufSigla: 'SP',
      ufNome: 'São Paulo'
    },
    usuarioNome: 'Sistema de Compras SP',
    linkSistemaOrigem: 'https://example.com/sistema1',
    justificativaPresencial: null,
    // Dados adicionais para compatibilidade
    id: 4,
    orgao: 'Prefeitura Municipal de São Paulo',
    objeto: 'Contratação de serviços de limpeza urbana',
    modalidade: 'PREGÃO_ELETRÔNICO',
    status: 'ABERTA',
    valorEstimado: 4500000,
    dataAbertura: '2025-02-01T08:00:00Z',
    dataEncerramento: '2025-03-01T18:00:00Z',
    numero: '004/2025',
    ano: 2025,
    municipio: 'São Paulo',
    estado: 'SP',
    totalPropostas: 10,
    propostasValidas: 7,
    urlEdital: 'https://example.com/edital4.pdf',
    urlSistema: 'https://example.com/sistema1',
    urlOrgao: 'https://www.prefeitura.sp.gov.br',
    contato: {
      nome: 'Ana Costa',
      cargo: 'Coordenadora de Serviços Urbanos',
      telefone: '(11) 3333-7777',
      email: 'servicos.urbanos@prefeitura.sp.gov.br'
    },
    cronograma: [
      {
        titulo: 'Publicação do Edital',
        data: '2025-02-01T08:00:00Z',
        descricao: 'Edital publicado no Diário Oficial'
      },
      {
        titulo: 'Sessão de Esclarecimentos',
        data: '2025-02-15T14:00:00Z',
        descricao: 'Sessão para esclarecimento de dúvidas'
      },
      {
        titulo: 'Abertura das Propostas',
        data: '2025-03-01T18:00:00Z',
        descricao: 'Abertura e julgamento das propostas'
      }
    ],
    documentos: [
      {
        id: 7,
        nome: 'Edital Completo',
        tipo: 'PDF',
        url: 'https://example.com/edital4.pdf'
      }
    ]
  }
];

// Licitações com data de hoje para simular dados em tempo real
const licitacoesAtuais = [
  {
    numeroControlePNCP: '12345678901234-1-000005/2025',
    numeroCompra: '005/2025',
    anoCompra: 2025,
    processo: '2025/005',
    tipoInstrumentoConvocatorioId: 1,
    tipoInstrumentoConvocatorioNome: 'Edital',
    modalidadeId: 6,
    modalidadeNome: 'Pregão - Eletrônico',
    modoDisputaId: 1,
    modoDisputaNome: 'Aberto',
    situacaoCompraId: 1,
    situacaoCompraNome: 'Divulgada no PNCP',
    objetoCompra: 'Aquisição de uniformes escolares para rede municipal',
    informacaoComplementar: 'Aquisição de 50.000 uniformes escolares para alunos da rede municipal',
    srp: false,
    amparoLegal: {
      codigo: 1,
      nome: 'Lei 14.133/2021, Art. 28, I',
      descricao: 'Aquisição de bens e contratação de serviços comuns'
    },
    valorTotalEstimado: 2500000.00,
    valorTotalHomologado: 0.00,
    dataAberturaProposta: new Date().toISOString().split('T')[0] + 'T09:00:00Z',
    dataEncerramentoProposta: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T18:00:00Z',
    dataPublicacaoPncp: new Date().toISOString().split('T')[0] + 'T09:00:00Z',
    dataInclusao: new Date().toISOString().split('T')[0] + 'T09:00:00Z',
    dataAtualizacao: new Date().toISOString().split('T')[0] + 'T09:00:00Z',
    sequencialCompra: 5,
    orgaoEntidade: {
      cnpj: '12345678000195',
      razaosocial: 'Prefeitura Municipal de São Paulo',
      poderId: 'E',
      esferaId: 'M'
    },
    unidadeOrgao: {
      codigoUnidade: '001',
      nomeUnidade: 'Secretaria Municipal de Educação',
      codigoIbge: 3550308,
      municipioNome: 'São Paulo',
      ufSigla: 'SP',
      ufNome: 'São Paulo'
    },
    usuarioNome: 'Sistema de Compras SP',
    linkSistemaOrigem: 'https://example.com/sistema1',
    justificativaPresencial: null,
    // Dados adicionais para compatibilidade
    id: 5,
    orgao: 'Prefeitura Municipal de São Paulo',
    objeto: 'Aquisição de uniformes escolares para rede municipal',
    modalidade: 'PREGÃO_ELETRÔNICO',
    status: 'ABERTA',
    valorEstimado: 2500000,
    dataAbertura: new Date().toISOString().split('T')[0] + 'T09:00:00Z',
    dataEncerramento: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T18:00:00Z',
    numero: '005/2025',
    ano: 2025,
    municipio: 'São Paulo',
    estado: 'SP',
    totalPropostas: 0,
    propostasValidas: 0,
    urlEdital: 'https://example.com/edital5.pdf',
    urlSistema: 'https://example.com/sistema1',
    urlOrgao: 'https://www.prefeitura.sp.gov.br',
    contato: {
      nome: 'Pedro Almeida',
      cargo: 'Coordenador de Compras Educacionais',
      telefone: '(11) 3333-8888',
      email: 'compras.educacao@prefeitura.sp.gov.br'
    },
    cronograma: [
      {
        titulo: 'Publicação do Edital',
        data: new Date().toISOString().split('T')[0] + 'T09:00:00Z',
        descricao: 'Edital publicado no Diário Oficial'
      },
      {
        titulo: 'Sessão de Esclarecimentos',
        data: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T14:00:00Z',
        descricao: 'Sessão para esclarecimento de dúvidas'
      },
      {
        titulo: 'Abertura das Propostas',
        data: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T18:00:00Z',
        descricao: 'Abertura e julgamento das propostas'
      }
    ],
    documentos: [
      {
        id: 8,
        nome: 'Edital Completo',
        tipo: 'PDF',
        url: 'https://example.com/edital5.pdf'
      }
    ]
  },
  {
    numeroControlePNCP: '12345678901234-1-000006/2025',
    numeroCompra: '006/2025',
    anoCompra: 2025,
    processo: '2025/006',
    tipoInstrumentoConvocatorioId: 1,
    tipoInstrumentoConvocatorioNome: 'Edital',
    modalidadeId: 7,
    modalidadeNome: 'Pregão - Presencial',
    modoDisputaId: 1,
    modoDisputaNome: 'Aberto',
    situacaoCompraId: 1,
    situacaoCompraNome: 'Divulgada no PNCP',
    objetoCompra: 'Construção de centro esportivo municipal',
    informacaoComplementar: 'Construção de centro esportivo com quadras, piscina e academia',
    srp: false,
    amparoLegal: {
      codigo: 1,
      nome: 'Lei 14.133/2021, Art. 28, I',
      descricao: 'Aquisição de bens e contratação de serviços comuns'
    },
    valorTotalEstimado: 12000000.00,
    valorTotalHomologado: 0.00,
    dataAberturaProposta: new Date().toISOString().split('T')[0] + 'T10:30:00Z',
    dataEncerramentoProposta: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T18:00:00Z',
    dataPublicacaoPncp: new Date().toISOString().split('T')[0] + 'T10:30:00Z',
    dataInclusao: new Date().toISOString().split('T')[0] + 'T10:30:00Z',
    dataAtualizacao: new Date().toISOString().split('T')[0] + 'T10:30:00Z',
    sequencialCompra: 6,
    orgaoEntidade: {
      cnpj: '12345678000195',
      razaosocial: 'Prefeitura Municipal de São Paulo',
      poderId: 'E',
      esferaId: 'M'
    },
    unidadeOrgao: {
      codigoUnidade: '005',
      nomeUnidade: 'Secretaria Municipal de Esportes',
      codigoIbge: 3550308,
      municipioNome: 'São Paulo',
      ufSigla: 'SP',
      ufNome: 'São Paulo'
    },
    usuarioNome: 'Sistema de Compras SP',
    linkSistemaOrigem: 'https://example.com/sistema1',
    justificativaPresencial: 'Complexidade técnica requer presença física',
    // Dados adicionais para compatibilidade
    id: 6,
    orgao: 'Prefeitura Municipal de São Paulo',
    objeto: 'Construção de centro esportivo municipal',
    modalidade: 'PREGÃO_PRESENCIAL',
    status: 'ABERTA',
    valorEstimado: 12000000,
    dataAbertura: new Date().toISOString().split('T')[0] + 'T10:30:00Z',
    dataEncerramento: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T18:00:00Z',
    numero: '006/2025',
    ano: 2025,
    municipio: 'São Paulo',
    estado: 'SP',
    totalPropostas: 0,
    propostasValidas: 0,
    urlEdital: 'https://example.com/edital6.pdf',
    urlSistema: 'https://example.com/sistema1',
    urlOrgao: 'https://www.prefeitura.sp.gov.br',
    contato: {
      nome: 'Roberto Lima',
      cargo: 'Coordenador de Obras Esportivas',
      telefone: '(11) 3333-9999',
      email: 'obras.esportes@prefeitura.sp.gov.br'
    },
    cronograma: [
      {
        titulo: 'Publicação do Edital',
        data: new Date().toISOString().split('T')[0] + 'T10:30:00Z',
        descricao: 'Edital publicado no Diário Oficial'
      },
      {
        titulo: 'Visita Técnica',
        data: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T09:00:00Z',
        descricao: 'Visita ao local da obra'
      },
      {
        titulo: 'Abertura das Propostas',
        data: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T18:00:00Z',
        descricao: 'Abertura e julgamento das propostas'
      }
    ],
    documentos: [
      {
        id: 9,
        nome: 'Edital Completo',
        tipo: 'PDF',
        url: 'https://example.com/edital6.pdf'
      },
      {
        id: 10,
        nome: 'Projeto Arquitetônico',
        tipo: 'PDF',
        url: 'https://example.com/projeto-esportivo.pdf'
      }
    ]
  },
  {
    numeroControlePNCP: '12345678901234-1-000007/2025',
    numeroCompra: '007/2025',
    anoCompra: 2025,
    processo: '2025/007',
    tipoInstrumentoConvocatorioId: 1,
    tipoInstrumentoConvocatorioNome: 'Edital',
    modalidadeId: 6,
    modalidadeNome: 'Pregão - Eletrônico',
    modoDisputaId: 1,
    modoDisputaNome: 'Aberto',
    situacaoCompraId: 1,
    situacaoCompraNome: 'Divulgada no PNCP',
    objetoCompra: 'Aquisição de equipamentos de segurança para escolas',
    informacaoComplementar: 'Aquisição de câmeras de segurança, alarmes e sistemas de controle de acesso',
    srp: false,
    amparoLegal: {
      codigo: 1,
      nome: 'Lei 14.133/2021, Art. 28, I',
      descricao: 'Aquisição de bens e contratação de serviços comuns'
    },
    valorTotalEstimado: 1800000.00,
    valorTotalHomologado: 0.00,
    dataAberturaProposta: new Date().toISOString().split('T')[0] + 'T14:15:00Z',
    dataEncerramentoProposta: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T17:00:00Z',
    dataPublicacaoPncp: new Date().toISOString().split('T')[0] + 'T14:15:00Z',
    dataInclusao: new Date().toISOString().split('T')[0] + 'T14:15:00Z',
    dataAtualizacao: new Date().toISOString().split('T')[0] + 'T14:15:00Z',
    sequencialCompra: 7,
    orgaoEntidade: {
      cnpj: '12345678000195',
      razaosocial: 'Prefeitura Municipal de São Paulo',
      poderId: 'E',
      esferaId: 'M'
    },
    unidadeOrgao: {
      codigoUnidade: '001',
      nomeUnidade: 'Secretaria Municipal de Educação',
      codigoIbge: 3550308,
      municipioNome: 'São Paulo',
      ufSigla: 'SP',
      ufNome: 'São Paulo'
    },
    usuarioNome: 'Sistema de Compras SP',
    linkSistemaOrigem: 'https://example.com/sistema1',
    justificativaPresencial: null,
    // Dados adicionais para compatibilidade
    id: 7,
    orgao: 'Prefeitura Municipal de São Paulo',
    objeto: 'Aquisição de equipamentos de segurança para escolas',
    modalidade: 'PREGÃO_ELETRÔNICO',
    status: 'ABERTA',
    valorEstimado: 1800000,
    dataAbertura: new Date().toISOString().split('T')[0] + 'T14:15:00Z',
    dataEncerramento: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T17:00:00Z',
    numero: '007/2025',
    ano: 2025,
    municipio: 'São Paulo',
    estado: 'SP',
    totalPropostas: 0,
    propostasValidas: 0,
    urlEdital: 'https://example.com/edital7.pdf',
    urlSistema: 'https://example.com/sistema1',
    urlOrgao: 'https://www.prefeitura.sp.gov.br',
    contato: {
      nome: 'Fernanda Costa',
      cargo: 'Coordenadora de Segurança Escolar',
      telefone: '(11) 3333-0000',
      email: 'seguranca.escolar@prefeitura.sp.gov.br'
    },
    cronograma: [
      {
        titulo: 'Publicação do Edital',
        data: new Date().toISOString().split('T')[0] + 'T14:15:00Z',
        descricao: 'Edital publicado no Diário Oficial'
      },
      {
        titulo: 'Sessão de Esclarecimentos',
        data: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T14:00:00Z',
        descricao: 'Sessão para esclarecimento de dúvidas'
      },
      {
        titulo: 'Abertura das Propostas',
        data: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] + 'T17:00:00Z',
        descricao: 'Abertura e julgamento das propostas'
      }
    ],
    documentos: [
      {
        id: 11,
        nome: 'Edital Completo',
        tipo: 'PDF',
        url: 'https://example.com/edital7.pdf'
      },
      {
        id: 12,
        nome: 'Especificações Técnicas',
        tipo: 'PDF',
        url: 'https://example.com/especificacoes-seguranca.pdf'
      }
    ]
  }
];

// Combinar todos os dados mock
const todosMockLicitacoes = [...mockLicitacoes, ...licitacoesAdicionais, ...licitacoesAtuais];

const mockEstatisticas = {
  total: 280, // Incluindo as 3 novas licitações de hoje
  abertas: 85, // +3 novas abertas
  emAndamento: 57, // +3 novas em andamento
  homologadas: 42,
  encerradas: 35,
  suspensas: 32,
  revogadas: 16,
  valorTotal: 240000000 // +15.5M das novas licitações
}

export const getMockLicitacoes = (filtros = {}) => {
  let licitacoes = [...todosMockLicitacoes]
  
  if (filtros.estado) {
    licitacoes = licitacoes.filter(l => l.estado === filtros.estado)
  }
  
  if (filtros.modalidade) {
    licitacoes = licitacoes.filter(l => l.modalidade === filtros.modalidade)
  }
  
  if (filtros.status) {
    licitacoes = licitacoes.filter(l => l.status === filtros.status)
  }
  
  if (filtros.palavraChave) {
    const keyword = filtros.palavraChave.toLowerCase()
    licitacoes = licitacoes.filter(l => 
      l.objeto.toLowerCase().includes(keyword) ||
      l.orgao.toLowerCase().includes(keyword)
    )
  }
  
  if (filtros.orgao) {
    const orgao = filtros.orgao.toLowerCase()
    licitacoes = licitacoes.filter(l => 
      l.orgao.toLowerCase().includes(orgao)
    )
  }
  
  // Aplicar filtros de data
  if (filtros.dataInicio) {
    const dataInicio = new Date(filtros.dataInicio)
    licitacoes = licitacoes.filter(l => {
      const dataAbertura = new Date(l.dataAbertura)
      return dataAbertura >= dataInicio
    })
  }
  
  if (filtros.dataFim) {
    const dataFim = new Date(filtros.dataFim)
    licitacoes = licitacoes.filter(l => {
      const dataAbertura = new Date(l.dataAbertura)
      return dataAbertura <= dataFim
    })
  }
  
  return {
    content: licitacoes,
    totalElements: licitacoes.length,
    total: licitacoes.length
  }
}

export const getMockLicitacaoDetalhes = (id) => {
  return todosMockLicitacoes.find(l => l.id === parseInt(id)) || null
}

export const getMockEstatisticas = () => {
  return mockEstatisticas
}

export default {
  getMockLicitacoes,
  getMockLicitacaoDetalhes,
  getMockEstatisticas
} 