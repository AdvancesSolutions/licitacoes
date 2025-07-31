<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-center">
        <h5>Licitações Recentes</h5>
        <router-link to="/licitacoes" class="btn btn-primary btn-sm">
          <vue-feather type="external-link" size="14" class="me-1"></vue-feather>
          Ver Todas
        </router-link>
      </div>
    </div>
    <div class="card-body">
      <div v-if="loading" class="text-center">
        <div class="spinner-border spinner-border-sm text-primary" role="status">
          <span class="visually-hidden">Carregando...</span>
        </div>
        <small class="text-muted">Carregando licitações...</small>
      </div>
      
      <div v-else-if="licitacoes.length === 0" class="text-center">
        <vue-feather type="file-text" class="text-muted" size="32"></vue-feather>
        <p class="text-muted mt-2 mb-0">Nenhuma licitação recente</p>
      </div>
      
      <div v-else>
        <div v-for="licitacao in licitacoes.slice(0, 5)" :key="licitacao.id" class="licitacao-item">
          <div class="d-flex align-items-start">
            <div class="avatar-sm bg-light-primary rounded me-3">
                              <vue-feather type="briefcase" class="text-primary"></vue-feather>
            </div>
            <div class="flex-grow-1">
              <h6 class="mb-1">{{ licitacao.orgao }}</h6>
              <p class="text-muted mb-1 small">{{ licitacao.objeto }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <span :class="getStatusClass(licitacao.status)" class="badge">
                  {{ licitacao.status }}
                </span>
                <small class="text-muted">{{ formatarData(licitacao.dataAbertura) }}</small>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-3">
          <router-link to="/licitacoes" class="btn btn-outline-primary btn-sm">
            Ver Mais Licitações
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pncpApiService from '@/services/pncpApi.js'

export default {
  name: 'LicitacoesWidget',
  data() {
    return {
      licitacoes: [],
      loading: true
    }
  },
  mounted() {
    this.carregarLicitacoesRecentes()
  },
  methods: {
    async carregarLicitacoesRecentes() {
      try {
        const response = await pncpApiService.getLicitacoesRecentes(0, 5)
        this.licitacoes = response.content || response.data || []
      } catch (error) {
        console.error('Erro ao carregar licitações recentes:', error)
        // Em caso de erro, usar dados mock para demonstração
        this.licitacoes = [
          {
            id: 1,
            orgao: 'Prefeitura Municipal de São Paulo',
            objeto: 'Aquisição de equipamentos de informática',
            status: 'ABERTA',
            dataAbertura: new Date().toISOString(),
            valorEstimado: 150000
          },
          {
            id: 2,
            orgao: 'Secretaria de Educação',
            objeto: 'Fornecimento de material escolar',
            status: 'EM_ANDAMENTO',
            dataAbertura: new Date(Date.now() - 86400000).toISOString(),
            valorEstimado: 250000
          },
          {
            id: 3,
            orgao: 'Hospital Municipal',
            objeto: 'Aquisição de medicamentos',
            status: 'HOMOLOGADA',
            dataAbertura: new Date(Date.now() - 172800000).toISOString(),
            valorEstimado: 500000
          }
        ]
      } finally {
        this.loading = false
      }
    },
    
    getStatusClass(status) {
      const classes = {
        'ABERTA': 'bg-light-success',
        'EM_ANDAMENTO': 'bg-light-warning',
        'SUSPENSA': 'bg-light-info',
        'REVOGADA': 'bg-light-danger',
        'ANULADA': 'bg-light-danger',
        'ENCERRADA': 'bg-light-secondary',
        'HOMOLOGADA': 'bg-light-success'
      }
      return classes[status] || 'bg-light-primary'
    },
    
    formatarData(data) {
      if (!data) return 'Data não informada'
      const dataObj = new Date(data)
      const hoje = new Date()
      const diffTime = Math.abs(hoje - dataObj)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays === 0) return 'Hoje'
      if (diffDays === 1) return 'Ontem'
      if (diffDays < 7) return `${diffDays} dias atrás`
      
      return dataObj.toLocaleDateString('pt-BR')
    }
  }
}
</script>

<style scoped>
.licitacao-item {
  padding: 12px 0;
  border-bottom: 1px solid #f1f1f1;
}

.licitacao-item:last-child {
  border-bottom: none;
}

.avatar-sm {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge {
  font-size: 0.7rem;
}

.small {
  font-size: 0.875rem;
}
</style> 