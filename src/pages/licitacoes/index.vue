<template>
  <Breadcrumbs main="Licitações" title="Licitações Públicas" />
  <div class="container-fluid w-full">
    <div class="row size-column">
      <div class="col-12">
        <div class="row">
          <!-- Cards de Estatísticas Principais -->
          <div class="col-xxl-3 col-lg-3 col-md-6 col-sm-6 box-col-6" v-for="(stat, index) in estatisticasCards" :key="stat.title">
            <div class="card stat-card-modern" :class="`stat-card-${index + 1}`">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                  <div class="flex-grow-1">
                    <span class="stat-label">{{ stat.title }}</span>
                    <div class="d-flex align-items-end gap-2 mt-2">
                      <h3 class="stat-value mb-0">{{ stat.dataInNumber }}</h3>
                      <span :class="stat.spanClass">
                        <i :class="stat.iconClass"></i>
                        <span class="ms-1">{{ stat.status }}</span>
                      </span>
                    </div>
                  </div>
                  <div class="stat-icon-modern">
                    <svg class="stroke-icon svg-fill">
                      <use :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${stat.svgIcon}`"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Principal com Total -->
          <div class="col-xxl-6 col-lg-6 col-md-12 box-col-12">
            <div class="card main-card-modern">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="flex-grow-1">
                    <span class="main-card-label">Total de Licitações</span>
                    <h2 class="main-card-value mb-3">
                      <span class="counter">{{ estatisticas.total || 0 }}</span>
                      <span class="main-card-subtitle">este mês</span>
                    </h2>
                    <button class="btn btn-primary btn-modern" @click="buscarLicitacoes">
                      <i class="fa fa-search me-2"></i>Nova Busca
                    </button>
                  </div>
                  <div class="main-chart">
                    <apexchart height="120" type="area" :options="miniChartOptions" :series="miniChartSeries"></apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tabela de Licitações Recentes -->
          <div class="col-xxl-6 col-lg-6 col-md-6 col-sm-6 box-col-6">
            <div class="card recent-card-modern">
              <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">
                    <i class="fa fa-clock me-2"></i>Licitações Recentes
                  </h5>
                  <DropDown1 />
                </div>
              </div>
              <div class="card-body">
                <div class="recent-list-modern">
                  <div v-for="licitacao in licitacoes.slice(0, 5)" :key="licitacao.id" class="recent-item-modern">
                    <div class="d-flex align-items-center">
                      <div class="recent-icon-modern">
                        <vue-feather type="briefcase" class="text-primary"></vue-feather>
                      </div>
                      <div class="recent-content-modern flex-grow-1">
                        <router-link class="recent-title" :to="`/licitacoes/detalhes/${licitacao.id}`">
                          {{ licitacao.orgao }}
                        </router-link>
                        <p class="recent-description">{{ licitacao.objeto.substring(0, 60) }}...</p>
                        <div class="recent-meta">
                          <span :class="getStatusClass(licitacao.status)" class="status-badge">{{ licitacao.status }}</span>
                          <span class="recent-date">{{ formatarData(licitacao.dataAbertura) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="licitacoes.length === 0" class="empty-state">
                    <i class="fa fa-inbox fa-3x"></i>
                    <p>Nenhuma licitação recente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Visão Geral com Gráficos -->
          <div class="col-xxl-6 col-lg-6 col-md-6 col-sm-6 box-col-6">
            <div class="card overview-card-modern">
              <div class="card-header">
                <h5 class="card-title">
                  <i class="fa fa-chart-line me-2"></i>Visão Geral das Licitações
                </h5>
              </div>
              <div class="card-body">
                <div class="overview-chart">
                  <apexchart height="200" type="line" :options="overviewChartOptions" :series="overviewChartSeries"></apexchart>
                </div>
                <div class="overview-stats">
                  <div class="stat-item">
                    <span class="stat-label">Média Mensal</span>
                    <span class="stat-value">142 licitações</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-label">Crescimento</span>
                    <span class="stat-value text-success">+12.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Top Estados Integrado -->
          <div class="col-xxl-6 col-lg-6 col-md-6 col-sm-6 box-col-6">
            <div class="card states-card-modern">
              <div class="card-header">
                <h5 class="card-title">
                  <i class="fa fa-map-marker me-2"></i>Top Estados
                </h5>
              </div>
              <div class="card-body">
                <div class="states-list-integrated">
                  <div v-for="estado in topEstados" :key="estado.nome" class="state-item-integrated">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="flex-grow-1">
                        <span class="state-name-integrated">{{ estado.nome }}</span>
                        <h6 class="state-count-integrated">{{ estado.quantidade }}</h6>
                      </div>
                      <div class="state-percentage-integrated">
                        <span class="badge badge-modern">{{ estado.percentual }}%</span>
                      </div>
                    </div>
                    <div class="progress progress-modern-integrated">
                      <div class="progress-bar" :style="{ width: estado.percentual + '%' }"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Filtros Avançados -->
          <div class="col-12">
            <div class="card filters-card-modern">
              <div class="card-header">
                <h5 class="card-title">
                  <i class="fa fa-filter me-2"></i>Filtros Avançados
                </h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-3">
                    <label class="form-label">Órgão</label>
                    <select class="form-select" v-model="filtros.orgao">
                      <option value="">Todos os órgãos</option>
                      <option value="prefeitura">Prefeitura</option>
                      <option value="estado">Estado</option>
                      <option value="federal">Federal</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label">Status</label>
                    <select class="form-select" v-model="filtros.status">
                      <option value="">Todos os status</option>
                      <option value="aberta">Aberta</option>
                      <option value="andamento">Em Andamento</option>
                      <option value="homologada">Homologada</option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label">Data Início</label>
                    <input type="date" class="form-control" v-model="filtros.dataInicio">
                  </div>
                  <div class="col-md-3">
                    <label class="form-label">Data Fim</label>
                    <input type="date" class="form-control" v-model="filtros.dataFim">
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-12">
                    <button class="btn btn-primary me-2" @click="aplicarFiltros">
                      <i class="fa fa-search me-2"></i>Aplicar Filtros
                    </button>
                    <button class="btn btn-outline-secondary me-2" @click="limparFiltros">
                      <i class="fa fa-times me-2"></i>Limpar
                    </button>
                    <button class="btn btn-warning btn-sm" @click="testarAPI">
                      <i class="fa fa-bug me-2"></i>Testar API
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tabela Completa de Licitações -->
          <div class="col-12">
            <div class="card table-card-modern">
              <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">
                    <i class="fa fa-table me-2"></i>Todas as Licitações
                  </h5>
                  <div class="d-flex gap-2">
                    <button class="btn btn-outline-primary btn-sm">
                      <i class="fa fa-download me-1"></i>Exportar
                    </button>
                    <button class="btn btn-primary btn-sm">
                      <i class="fa fa-plus me-1"></i>Nova Licitação
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <!-- Loading State -->
                <div v-if="loading" class="loading-state">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Carregando...</span>
                  </div>
                  <p class="mt-3">Carregando licitações...</p>
                </div>
                
                <!-- Table Content -->
                <div v-else>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead class="table-light">
                        <tr>
                          <th>Órgão</th>
                          <th>Objeto</th>
                          <th>Status</th>
                          <th>Data Abertura</th>
                          <th>Valor Estimado</th>
                          <th>Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="licitacao in licitacoes" :key="licitacao.id">
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm me-2">
                                <div class="avatar-title bg-light-primary rounded">
                                  <i class="fa fa-building text-primary"></i>
                                </div>
                              </div>
                              <div>
                                <h6 class="mb-0">{{ licitacao.orgao }}</h6>
                                <small class="text-muted">{{ licitacao.uf || licitacao.estado }}</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="text-truncate" style="max-width: 300px;">
                              {{ licitacao.objeto }}
                            </div>
                          </td>
                          <td>
                            <span :class="getStatusClass(licitacao.status)" class="badge bg-light-primary">
                              {{ licitacao.status }}
                            </span>
                          </td>
                          <td>{{ formatarData(licitacao.dataAbertura) }}</td>
                          <td>{{ formatarMoeda(licitacao.valorEstimado) }}</td>
                          <td>
                            <div class="btn-group">
                              <button class="btn btn-sm btn-outline-primary" @click="verDetalhes(licitacao.id)">
                                <i class="fa fa-eye"></i>
                              </button>
                              <button class="btn btn-sm btn-outline-secondary" @click="favoritar(licitacao)">
                                <i :class="licitacao.favorito ? 'fa fa-star text-warning' : 'fa fa-star'"></i>
                              </button>
                              <button class="btn btn-sm btn-outline-info">
                                <i class="fa fa-share"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <!-- Empty State -->
                  <div v-if="!loading && licitacoes.length === 0" class="empty-state">
                    <i class="fa fa-search fa-3x text-muted"></i>
                    <h5 class="mt-3">Nenhuma licitação encontrada</h5>
                    <p class="text-muted">Tente ajustar os filtros de busca</p>
                    <button class="btn btn-primary mt-3" @click="limparFiltros">
                      <i class="fa fa-refresh me-2"></i>Limpar Filtros
                    </button>
                  </div>
                  
                  <!-- Paginação -->
                  <nav v-if="totalPaginas > 1" class="mt-4">
                    <ul class="pagination justify-content-center">
                      <li class="page-item" :class="{ disabled: paginaAtual === 1 }">
                        <a class="page-link" href="#" @click.prevent="mudarPagina(paginaAtual - 1)">Anterior</a>
                      </li>
                      <li v-for="pagina in paginasVisiveis" :key="pagina" class="page-item" :class="{ active: pagina === paginaAtual }">
                        <a class="page-link" href="#" @click.prevent="mudarPagina(pagina)">{{ pagina }}</a>
                      </li>
                      <li class="page-item" :class="{ disabled: paginaAtual === totalPaginas }">
                        <a class="page-link" href="#" @click.prevent="mudarPagina(paginaAtual + 1)">Próximo</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pncpApiService from '@/services/pncpApiV2.js'
import DropDown1 from '@/pages/dashboard/base/dropdown/DropDown1.vue'
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'LicitacoesIndex',
  components: {
    DropDown1,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      licitacoes: [],
      loading: false,
      filtros: {
        estado: '',
        modalidade: '',
        status: '',
        palavraChave: '',
        orgao: '',
        dataInicio: '',
        dataFim: ''
      },
      estatisticas: {},
      paginaAtual: 1,
      itensPorPagina: 10,
      totalItens: 0,
      totalPaginas: 0,
      estados: ['SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA', 'GO', 'PE', 'CE'],
      modalidades: ['PREGÃO_ELETRÔNICO', 'PREGÃO_PRESENCIAL', 'CONCORRÊNCIA', 'TOMADA_DE_PREÇOS', 'CONVITE', 'CONCURSO', 'LEILÃO'],
      statusList: ['ABERTA', 'EM_ANDAMENTO', 'SUSPENSA', 'REVOGADA', 'ANULADA', 'ENCERRADA', 'HOMOLOGADA'],
      estatisticasCards: [
        {
          cardClass: "card-body primary",
          title: "Licitações Abertas",
          dataInNumber: "0",
          spanClass: "font-primary f-12 f-w-500",
          iconClass: "icon-arrow-up",
          status: "+0%",
          svgIcon: "new-order"
        },
        {
          cardClass: "card-body warning",
          title: "Em Andamento",
          dataInNumber: "0",
          spanClass: "font-warning f-12 f-w-500",
          iconClass: "icon-arrow-up",
          status: "+0%",
          svgIcon: "customers"
        },
        {
          cardClass: "card-body secondary",
          title: "Valor Total",
          dataInNumber: "R$ 0",
          spanClass: "font-secondary f-12 f-w-500",
          iconClass: "icon-arrow-down",
          status: "0%",
          svgIcon: "sale"
        },
        {
          cardClass: "card-body success",
          title: "Homologadas",
          dataInNumber: "0",
          spanClass: "font-primary f-12 f-w-500",
          iconClass: "icon-arrow-up",
          status: "+0%",
          svgIcon: "profit"
        }
      ],
      overviewCards: [
        {
          svgIcon: "orders",
          title: "Total de Licitações",
          overviewInNumber: "0"
        },
        {
          svgIcon: "expense",
          title: "Valor Estimado",
          overviewInNumber: "R$ 0"
        },
        {
          svgIcon: "doller-return",
          title: "Encerradas",
          overviewInNumber: "0"
        }
      ],
      topEstados: [
        { nome: "São Paulo", quantidade: 0, percentual: 0 },
        { nome: "Rio de Janeiro", quantidade: 0, percentual: 0 },
        { nome: "Minas Gerais", quantidade: 0, percentual: 0 },
        { nome: "Rio Grande do Sul", quantidade: 0, percentual: 0 },
        { nome: "Paraná", quantidade: 0, percentual: 0 }
      ]
    }
  },
  computed: {
    paginasVisiveis() {
      const paginas = []
      const inicio = Math.max(1, this.paginaAtual - 2)
      const fim = Math.min(this.totalPaginas, this.paginaAtual + 2)
      
      for (let i = inicio; i <= fim; i++) {
        paginas.push(i)
      }
      return paginas
    },
    miniChartOptions() {
      return {
        chart: {
          type: 'area',
          height: 120,
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [0, 90, 100]
          }
        },
        colors: ['#7366ff'],
        dataLabels: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        grid: {
          show: false
        },
        xaxis: {
          show: false
        },
        yaxis: {
          show: false
        }
      }
    },
    miniChartSeries() {
      return [{
        name: 'Licitações',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }]
    },
    overviewChartOptions() {
      return {
        chart: {
          type: 'line',
          height: 200,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        colors: ['#7366ff', '#f73164'],
        dataLabels: {
          enabled: false
        },
        tooltip: {
          theme: 'dark'
        },
        grid: {
          borderColor: '#f1f1f1',
          strokeDashArray: 3
        },
        xaxis: {
          categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          labels: {
            style: {
              colors: '#666'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#666'
            }
          }
        },
        legend: {
          show: false
        }
      }
    },
    overviewChartSeries() {
      return [
        {
          name: 'Licitações',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 110, 95, 85]
        },
        {
          name: 'Valor',
          data: [20, 30, 25, 40, 39, 50, 60, 81, 105, 90, 75, 65]
        }
      ]
    }
  },
  mounted() {
    this.carregarEstatisticas()
    this.buscarLicitacoes()
  },
  methods: {
    async buscarLicitacoes() {
      this.loading = true
      try {
        // Preparar filtros para a API do PNCP V2
        const filtrosAPI = { ...this.filtros }
        
        // Se não há datas especificadas, usar o mês atual
        if (!filtrosAPI.dataInicio && !filtrosAPI.dataFim) {
          const hoje = new Date()
          const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1)
          filtrosAPI.dataInicio = primeiroDiaMes.toISOString().split('T')[0]
          filtrosAPI.dataFim = hoje.toISOString().split('T')[0]
        }
        
        console.log('🔍 Buscando licitações com filtros:', filtrosAPI)
        
        // Usar a nova API V2 conforme manual PNCP
        const response = await pncpApiService.consultarContratacoesPorData(
          filtrosAPI.dataInicio,
          filtrosAPI.dataFim,
          {
            modalidadeId: filtrosAPI.modalidade,
            uf: filtrosAPI.estado,
            pagina: this.paginaAtual,
            tamanho: this.itensPorPagina
          }
        )
        
        console.log('🔍 Resposta da API V2:', response)
        
        // Processar dados da API conforme estrutura do PNCP V2
        this.licitacoes = (response.content || response.data || []).map(item => ({
          id: item.numeroControlePNCP || item.id,
          orgao: item.orgaoEntidade?.razaosocial || item.orgao,
          objeto: item.objetoCompra || item.objeto,
          modalidade: item.modalidadeNome || item.modalidade,
          status: item.situacaoCompraNome || item.status,
          valorEstimado: item.valorTotalEstimado || item.valorEstimado,
          dataAbertura: item.dataAberturaProposta || item.dataAbertura,
          dataEncerramento: item.dataEncerramentoProposta || item.dataEncerramento,
          numero: item.numeroCompra || item.numero,
          ano: item.anoCompra || item.ano,
          municipio: item.unidadeOrgao?.municipioNome || item.municipio,
          estado: item.unidadeOrgao?.ufSigla || item.estado,
          totalPropostas: item.totalPropostas || 0,
          propostasValidas: item.propostasValidas || 0,
          urlEdital: item.linkSistemaOrigem || item.urlEdital,
          urlSistema: item.linkSistemaOrigem || item.urlSistema,
          urlOrgao: item.urlOrgao || '',
          contato: item.contato || {
            nome: 'Não informado',
            cargo: 'Não informado',
            telefone: 'Não informado',
            email: 'Não informado'
          },
          cronograma: item.cronograma || [],
          documentos: item.documentos || []
        }))
        
        this.totalItens = response.totalElements || response.total || 0
        this.totalPaginas = response.totalPages || Math.ceil(this.totalItens / this.itensPorPagina)
        
        console.log('🔍 Licitações processadas:', this.licitacoes)
        
        // Atualizar estatísticas baseadas nos dados retornados
        this.atualizarEstatisticasCards()
        this.atualizarTopEstados()
      } catch (error) {
        console.error('❌ Erro ao buscar licitações:', error)
        this.licitacoes = []
        this.totalItens = 0
        this.totalPaginas = 0
      } finally {
        this.loading = false
      }
    },
    async carregarEstatisticas() {
      try {
        // Usar a nova API V2 para buscar estatísticas
        const hoje = new Date()
        const primeiroDiaMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1)
        
        // Buscar contratações do mês atual para calcular estatísticas
        const response = await pncpApiService.consultarContratacoesPorData(
          primeiroDiaMes.toISOString().split('T')[0],
          hoje.toISOString().split('T')[0],
          { tamanho: 1000 } // Buscar mais itens para estatísticas
        )
        
        // Calcular estatísticas baseadas nos dados retornados
        const licitacoes = response.content || response.data || []
        const estatisticas = {
          total: licitacoes.length,
          abertas: licitacoes.filter(l => l.situacaoCompraNome === 'Divulgada no PNCP').length,
          emAndamento: licitacoes.filter(l => l.situacaoCompraNome === 'Em Andamento').length,
          homologadas: licitacoes.filter(l => l.situacaoCompraNome === 'Homologada').length,
          encerradas: licitacoes.filter(l => l.situacaoCompraNome === 'Encerrada').length,
          valorTotal: licitacoes.reduce((total, l) => total + (l.valorTotalEstimado || 0), 0)
        }
        
        this.estatisticas = estatisticas
        this.atualizarEstatisticasCards()
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error)
        // Usar dados padrão em caso de erro
        this.estatisticas = {
          total: 0,
          abertas: 0,
          emAndamento: 0,
          homologadas: 0,
          encerradas: 0,
          valorTotal: 0
        }
      }
    },
    atualizarEstatisticasCards() {
      // Atualizar cards de estatísticas
      this.estatisticasCards[0].dataInNumber = this.estatisticas.abertas || 0
      this.estatisticasCards[1].dataInNumber = this.estatisticas.emAndamento || 0
      this.estatisticasCards[2].dataInNumber = this.formatarValor(this.estatisticas.valorTotal || 0)
      this.estatisticasCards[3].dataInNumber = this.estatisticas.homologadas || 0
      
      // Atualizar cards de overview
      this.overviewCards[0].overviewInNumber = this.estatisticas.total || 0
      this.overviewCards[1].overviewInNumber = this.formatarValor(this.estatisticas.valorTotal || 0)
      this.overviewCards[2].overviewInNumber = this.estatisticas.encerradas || 0
    },
    atualizarTopEstados() {
      // Calcular top estados baseado nas licitações carregadas
      const estadosCount = {}
      this.licitacoes.forEach(licitacao => {
        if (licitacao.estado) {
          estadosCount[licitacao.estado] = (estadosCount[licitacao.estado] || 0) + 1
        }
      })
      
      // Converter para array e ordenar
      const estadosArray = Object.entries(estadosCount)
        .map(([estado, quantidade]) => ({ nome: estado, quantidade }))
        .sort((a, b) => b.quantidade - a.quantidade)
        .slice(0, 5)
      
      // Calcular percentuais
      const total = estadosArray.reduce((sum, estado) => sum + estado.quantidade, 0)
      this.topEstados = estadosArray.map(estado => ({
        ...estado,
        percentual: total > 0 ? Math.round((estado.quantidade / total) * 100) : 0
      }))
    },
    limparFiltros() {
      this.filtros = {
        estado: '',
        modalidade: '',
        status: '',
        palavraChave: '',
        orgao: '',
        dataInicio: '',
        dataFim: ''
      }
      this.paginaAtual = 1
      this.buscarLicitacoes()
    },
    mudarPagina(pagina) {
      if (pagina >= 1 && pagina <= this.totalPaginas) {
        this.paginaAtual = pagina
        this.buscarLicitacoes()
      }
    },
    verDetalhes(id) {
      this.$router.push(`/licitacoes/detalhes/${id}`)
    },
    favoritar(licitacao) {
      licitacao.favorito = !licitacao.favorito
      const favoritos = JSON.parse(localStorage.getItem('licitacoes_favoritas') || '[]')
      if (licitacao.favorito) {
        if (!favoritos.find(f => f.id === licitacao.id)) {
          favoritos.push(licitacao)
        }
      } else {
        const index = favoritos.findIndex(f => f.id === licitacao.id)
        if (index > -1) {
          favoritos.splice(index, 1)
        }
      }
      localStorage.setItem('licitacoes_favoritas', JSON.stringify(favoritos))
    },
    getStatusClass(status) {
      const classes = {
        'ABERTA': 'badge bg-success',
        'EM_ANDAMENTO': 'badge bg-warning',
        'SUSPENSA': 'badge bg-secondary',
        'REVOGADA': 'badge bg-danger',
        'ANULADA': 'badge bg-danger',
        'ENCERRADA': 'badge bg-info',
        'HOMOLOGADA': 'badge bg-primary'
      }
      return classes[status] || 'badge bg-secondary'
    },
    formatarValor(valor) {
      if (!valor) return 'R$ 0,00'
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(valor)
    },
    formatarData(data) {
      if (!data) return '-'
      return new Date(data).toLocaleDateString('pt-BR')
    },
    formatarMoeda(valor) {
      if (!valor) return 'R$ 0,00'
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(valor)
    },
    aplicarFiltros() {
      this.paginaAtual = 1
      this.buscarLicitacoes()
    },
    async testarAPI() {
      console.log('🧪 Iniciando teste da API do PNCP...');
      try {
        // Testar diferentes endpoints
        const endpointFuncional = await pncpApiService.testarEndpoints();
        console.log('🧪 Endpoint funcional:', endpointFuncional);
        
        // Testar conectividade
        const conectado = await pncpApiService.testarConexao();
        console.log('🧪 Conectividade:', conectado);
        
        // Testar busca sem filtros
        const dadosTeste = await pncpApiService.buscarLicitacoesTeste();
        console.log('🧪 Dados de teste:', dadosTeste);
        
        // Testar filtros de data especificamente
        const testeData = await pncpApiService.testarFiltrosData();
        console.log('🧪 Teste de data:', testeData);
        
        // Testar busca de licitações em aberto
        const hoje = new Date().toISOString().split('T')[0];
        const licitacoesEmAberto = await pncpApiService.buscarLicitacoesEmAberto({
          dataFim: hoje
        }, 1, 5);
        console.log('🧪 Licitações em aberto:', licitacoesEmAberto);
        
        let mensagem = `🧪 Teste da API PNCP Concluído!\n\n`;
        mensagem += `✅ Endpoint funcional: ${endpointFuncional ? 'SIM' : 'NÃO'}\n`;
        mensagem += `✅ Conectividade: ${conectado ? 'OK' : 'FALHOU'}\n`;
        mensagem += `📅 Data testada: ${testeData?.dataTestada || 'N/A'}\n`;
        mensagem += `📊 Licitações hoje (API): ${testeData?.api?.total || 0}\n`;
        mensagem += `📊 Licitações hoje (Mock): ${testeData?.mock?.total || 0}\n`;
        mensagem += `🔓 Licitações em aberto: ${licitacoesEmAberto?.total || 0}\n\n`;
        mensagem += `🔗 URL Base: ${pncpApiService.baseUrl}\n`;
        mensagem += `📋 Endpoints testados:\n`;
        mensagem += `   • /v1/contratacoes/publicacao\n`;
        mensagem += `   • /v1/contratacoes/proposta\n`;
        mensagem += `   • /v1/pca/\n`;
        mensagem += `   • /v1/pca/usuario`;
        
        alert(mensagem);
        
      } catch (error) {
        console.error('🧪 Erro no teste:', error);
        alert('❌ Erro no teste da API: ' + error.message);
      }
    },
    exportarCSV() {
      console.log('Exportar CSV')
    },
    exportarPDF() {
      console.log('Exportar PDF')
    }
  }
}
</script>

<style scoped>
/* Layout Full Width - Preenchendo toda a área disponível */
.container-fluid.w-full {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* Sobrescrever a regra global que limita a largura */
.page-wrapper.modern-type .page-body-wrapper .page-body .container-fluid {
  max-width: 100% !important;
  width: 100% !important;
}

.row.size-column {
  margin-left: 0 !important;
  margin-right: 0 !important;
  width: 100% !important;
}

.row.size-column > .col-12 {
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100% !important;
}

/* Ajustes para o conteúdo interno */
.row > [class*="col-"] {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

@media (min-width: 768px) {
  .row > [class*="col-"] {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (min-width: 1200px) {
  .row > [class*="col-"] {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

/* Forçar largura total em todos os containers */
.container-fluid {
  max-width: 100% !important;
  width: 100% !important;
}

/* Remover margens laterais do body se necessário */
body {
  margin: 0 !important;
  padding: 0 !important;
}

/* Garantir que o conteúdo principal ocupe toda a largura */
#app {
  width: 100% !important;
  max-width: 100% !important;
}

/* Cards de Estatísticas Modernos */
.stat-card-modern {
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  background: var(--card-bg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.stat-card-modern:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.stat-card-modern .card-body {
  padding: 1.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--body-font-color);
  font-weight: 500;
  opacity: 0.8;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--theme-deafult);
  margin: 0;
}

.stat-icon-modern {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--theme-deafult), var(--theme-secondary));
  color: white;
}

.stat-icon-modern .stroke-icon {
  width: 24px;
  height: 24px;
}

/* Card Principal */
.main-card-modern {
  border: none;
  border-radius: 20px;
  box-shadow: 0 6px 25px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, var(--theme-deafult), var(--theme-secondary));
  color: white;
  overflow: hidden;
}

.main-card-modern .card-body {
  padding: 2rem;
}

.main-card-label {
  font-size: 0.875rem;
  opacity: 0.9;
  font-weight: 500;
}

.main-card-value {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
}

.main-card-subtitle {
  font-size: 1rem;
  opacity: 0.8;
  font-weight: 400;
}

.btn-modern {
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-modern:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.main-chart {
  opacity: 0.9;
}

/* Card de Licitações Recentes */
.recent-card-modern {
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  background: var(--card-bg);
  overflow: hidden;
}

.recent-card-modern .card-header {
  background: transparent;
  border-bottom: 1px solid var(--recent-border);
  padding: 1.5rem 1.5rem 1rem;
}

.recent-list-modern {
  max-height: 400px;
  overflow-y: auto;
  padding: 0.5rem 0;
}

.recent-item-modern {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--recent-border);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.recent-item-modern:hover {
  background: var(--light-bg);
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.recent-item-modern:last-child {
  border-bottom: none;
}

.recent-icon-modern {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--light-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.recent-title {
  font-weight: 600;
  color: var(--theme-deafult);
  text-decoration: none;
  font-size: 0.875rem;
}

.recent-title:hover {
  color: var(--theme-secondary);
}

.recent-description {
  font-size: 0.75rem;
  color: var(--body-font-color);
  opacity: 0.7;
  margin: 0.25rem 0;
}

.recent-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.status-badge {
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-weight: 600;
}

.recent-date {
  font-size: 0.625rem;
  color: var(--body-font-color);
  opacity: 0.6;
}

/* Card de Visão Geral */
.overview-card-modern {
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  background: var(--card-bg);
  overflow: hidden;
}

.overview-card-modern .card-header {
  background: transparent;
  border-bottom: 1px solid var(--recent-border);
  padding: 1.5rem 1.5rem 1rem;
}

.overview-chart {
  margin-bottom: 1.5rem;
}

.overview-stats {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-item .stat-label {
  font-size: 0.75rem;
  color: var(--body-font-color);
  opacity: 0.7;
  display: block;
  margin-bottom: 0.25rem;
}

.stat-item .stat-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-deafult);
  margin: 0;
}

/* Card de Estados Integrado */
.states-card-modern {
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  overflow: hidden;
  background: var(--card-bg);
}

.states-card-modern .card-header {
  background: transparent;
  border-bottom: 1px solid var(--recent-border);
  padding: 1.5rem 1.5rem 1rem;
}

.states-list-integrated {
  max-height: 400px;
  overflow-y: auto;
  padding: 0.5rem 0;
}

.state-item-integrated {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--recent-border);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.state-item-integrated:hover {
  background: var(--light-bg);
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.state-item-integrated:last-child {
  border-bottom: none;
}

.state-name-integrated {
  font-size: 0.875rem;
  color: var(--body-font-color);
  font-weight: 500;
  display: block;
  margin-bottom: 0.25rem;
}

.state-count-integrated {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--theme-deafult);
  margin: 0;
}

.state-percentage-integrated {
  display: flex;
  align-items: center;
}

.state-percentage-integrated .badge {
  background: linear-gradient(135deg, var(--theme-deafult), var(--theme-secondary));
  color: white;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-weight: 600;
}

.progress-modern-integrated {
  height: 4px;
  border-radius: 2px;
  background: var(--light-bg);
  margin-top: 0.5rem;
  overflow: hidden;
}

.progress-modern-integrated .progress-bar {
  background: linear-gradient(90deg, var(--theme-deafult), var(--theme-secondary));
  border-radius: 2px;
  transition: width 0.6s ease;
}

/* Card de Filtros */
.filters-card-modern {
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  background: var(--card-bg);
  overflow: hidden;
}

.filters-card-modern .card-header {
  background: transparent;
  border-bottom: 1px solid var(--recent-border);
  padding: 1.5rem 1.5rem 1rem;
}

/* Card da Tabela */
.table-card-modern {
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  background: var(--card-bg);
  overflow: hidden;
}

.table-card-modern .card-header {
  background: transparent;
  border-bottom: 1px solid var(--recent-border);
  padding: 1.5rem 1.5rem 1rem;
}

.table-card-modern .table {
  margin-bottom: 0;
  background: var(--card-bg);
  color: var(--body-font-color);
}

.table-card-modern .table th {
  border-top: none;
  font-weight: 600;
  color: var(--body-font-color);
  font-size: 0.875rem;
  padding: 1rem;
  background: var(--card-bg);
  border-bottom: 1px solid var(--recent-border);
}

.table-card-modern .table td {
  padding: 1rem;
  vertical-align: middle;
  border-top: 1px solid var(--recent-border);
  background: var(--card-bg);
  color: var(--body-font-color);
}

.table-card-modern .table tbody tr:hover {
  background: var(--light-bg);
}

.table-card-modern .table tbody tr:hover td {
  background: var(--light-bg);
}

/* Garantir que o texto seja visível */
.table-card-modern .table h6 {
  color: var(--body-font-color) !important;
}

.table-card-modern .table small {
  color: var(--body-font-color) !important;
  opacity: 0.7;
}

.table-card-modern .table .text-muted {
  color: var(--body-font-color) !important;
  opacity: 0.6;
}

/* Corrigir cores dos badges na tabela */
.table-card-modern .badge {
  color: var(--body-font-color) !important;
  font-weight: 500;
}

.table-card-modern .badge.bg-success {
  background-color: #28a745 !important;
  color: white !important;
}

.table-card-modern .badge.bg-warning {
  background-color: #ffc107 !important;
  color: #212529 !important;
}

.table-card-modern .badge.bg-secondary {
  background-color: #6c757d !important;
  color: white !important;
}

.table-card-modern .badge.bg-danger {
  background-color: #dc3545 !important;
  color: white !important;
}

.table-card-modern .badge.bg-info {
  background-color: #17a2b8 !important;
  color: white !important;
}

.table-card-modern .badge.bg-primary {
  background-color: #007bff !important;
  color: white !important;
}

/* Corrigir cores dos ícones na tabela */
.table-card-modern .fa {
  color: var(--body-font-color) !important;
}

.table-card-modern .fa-building {
  color: var(--theme-deafult) !important;
}

.table-card-modern .fa-star.text-warning {
  color: #ffc107 !important;
}

/* Corrigir cores dos botões na tabela */
.table-card-modern .btn-outline-primary {
  color: var(--theme-deafult) !important;
  border-color: var(--theme-deafult) !important;
}

.table-card-modern .btn-outline-secondary {
  color: var(--body-font-color) !important;
  border-color: var(--recent-border) !important;
}

.table-card-modern .btn-outline-info {
  color: #17a2b8 !important;
  border-color: #17a2b8 !important;
}

.table-card-modern .btn-outline-primary:hover,
.table-card-modern .btn-outline-secondary:hover,
.table-card-modern .btn-outline-info:hover {
  color: white !important;
}

.avatar-sm {
  width: 32px;
  height: 32px;
}

.avatar-title {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
}

.bg-light-primary {
  background-color: rgba(var(--theme-deafult-rgb), 0.1) !important;
}

.text-primary {
  color: var(--theme-deafult) !important;
}

.badge.bg-light-primary {
  background-color: rgba(var(--theme-deafult-rgb), 0.1) !important;
  color: var(--theme-deafult) !important;
  font-weight: 500;
}

/* Estados vazios */
.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--body-font-color);
  opacity: 0.6;
}

.empty-state i {
  margin-bottom: 1rem;
  opacity: 0.4;
}

.empty-state p {
  margin: 0;
  font-size: 0.875rem;
}

/* Loading State */
.loading-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--body-font-color);
}

.loading-state .spinner-border {
  width: 3rem;
  height: 3rem;
}

.loading-state p {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
}

/* Animações */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-card-modern,
.main-card-modern,
.recent-card-modern,
.overview-card-modern,
.states-card-modern,
.filters-card-modern,
.table-card-modern {
  animation: slideInUp 0.6s ease-out;
}

/* Scrollbar personalizada */
.recent-list-modern::-webkit-scrollbar,
.states-list-integrated::-webkit-scrollbar {
  width: 6px;
}

.recent-list-modern::-webkit-scrollbar-track,
.states-list-integrated::-webkit-scrollbar-track {
  background: var(--light-bg);
  border-radius: 3px;
}

.recent-list-modern::-webkit-scrollbar-thumb,
.states-list-integrated::-webkit-scrollbar-thumb {
  background: var(--theme-deafult);
  border-radius: 3px;
}

.recent-list-modern::-webkit-scrollbar-thumb:hover,
.states-list-integrated::-webkit-scrollbar-thumb:hover {
  background: var(--theme-secondary);
}

/* Responsividade */
@media (max-width: 768px) {
  .stat-card-modern .card-body,
  .main-card-modern .card-body,
  .recent-card-modern .card-header,
  .overview-card-modern .card-header,
  .states-card-modern .card-header,
  .filters-card-modern .card-header,
  .table-card-modern .card-header {
    padding: 1rem;
  }
  
  .overview-stats {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .stat-item {
    text-align: left;
  }
}

/* Variáveis CSS para tema */
:root {
  --theme-deafult: #7366ff;
  --theme-secondary: #f73164;
  --theme-deafult-rgb: 115, 102, 255;
  --card-bg: #ffffff;
  --body-font-color: #2c323f;
  --recent-border: #f1f1f1;
  --light-bg: #f8f9fa;
}

[data-bs-theme="dark"] {
  --card-bg: #2a2d3a;
  --body-font-color: #ffffff;
  --recent-border: #3a3f4a;
  --light-bg: #3a3f4a;
}

/* Regras específicas para tema dark na tabela */
[data-bs-theme="dark"] .table-card-modern .table {
  background: #2a2d3a !important;
  color: #ffffff !important;
}

[data-bs-theme="dark"] .table-card-modern .table th {
  background: #2a2d3a !important;
  color: #ffffff !important;
  border-bottom-color: #3a3f4a !important;
}

[data-bs-theme="dark"] .table-card-modern .table td {
  background: #2a2d3a !important;
  color: #ffffff !important;
  border-top-color: #3a3f4a !important;
}

[data-bs-theme="dark"] .table-card-modern .table tbody tr:hover {
  background: #3a3f4a !important;
}

[data-bs-theme="dark"] .table-card-modern .table tbody tr:hover td {
  background: #3a3f4a !important;
}

[data-bs-theme="dark"] .table-card-modern .table h6 {
  color: #ffffff !important;
}

[data-bs-theme="dark"] .table-card-modern .table small {
  color: #ffffff !important;
  opacity: 0.7;
}

[data-bs-theme="dark"] .table-card-modern .table .text-muted {
  color: #ffffff !important;
  opacity: 0.6;
}

[data-bs-theme="dark"] .table-card-modern .fa {
  color: #ffffff !important;
}

[data-bs-theme="dark"] .table-card-modern .fa-building {
  color: #7366ff !important;
}

[data-bs-theme="dark"] .table-card-modern .btn-outline-primary {
  color: #7366ff !important;
  border-color: #7366ff !important;
}

[data-bs-theme="dark"] .table-card-modern .btn-outline-secondary {
  color: #ffffff !important;
  border-color: #3a3f4a !important;
}

[data-bs-theme="dark"] .table-card-modern .btn-outline-info {
  color: #17a2b8 !important;
  border-color: #17a2b8 !important;
}
</style> 