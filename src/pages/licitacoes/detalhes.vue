<template>
  <div class="page-wrapper">
    <div class="page-body-wrapper">
      <div class="page-body">
        <div class="container-fluid">
          <div class="page-title">
            <div class="row">
              <div class="col-6">
                <h3>Detalhes da Licitação</h3>
              </div>
              <div class="col-6">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/dashboard/default">
                      <vue-feather type="home"></vue-feather>
                    </router-link>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/licitacoes">Licitações</router-link>
                  </li>
                  <li class="breadcrumb-item active">Detalhes</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div v-if="loading" class="text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
            <p class="mt-2">Carregando detalhes da licitação...</p>
          </div>

          <div v-else-if="licitacao" class="row">
            <!-- Informações Principais -->
            <div class="col-lg-8">
              <div class="card">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5>Informações da Licitação</h5>
                    <div>
                      <button @click="favoritar" class="btn btn-outline-warning btn-sm me-2">
                        <vue-feather :type="licitacao.favorita ? 'star' : 'star'" size="16" :class="licitacao.favorita ? 'text-warning' : ''"></vue-feather>
                        {{ licitacao.favorita ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos' }}
                      </button>
                      <button @click="voltar" class="btn btn-secondary btn-sm">
                        <vue-feather type="arrow-left" size="16"></vue-feather>
                        Voltar
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6">
                      <h6 class="text-muted mb-2">Órgão</h6>
                      <p class="mb-3">{{ licitacao.orgao }}</p>
                      
                      <h6 class="text-muted mb-2">Objeto</h6>
                      <p class="mb-3">{{ licitacao.objeto }}</p>
                      
                      <h6 class="text-muted mb-2">Modalidade</h6>
                      <span class="badge bg-light-primary mb-3">{{ licitacao.modalidade }}</span>
                    </div>
                    <div class="col-md-6">
                      <h6 class="text-muted mb-2">Status</h6>
                      <span :class="getStatusClass(licitacao.status)" class="badge mb-3">{{ licitacao.status }}</span>
                      
                      <h6 class="text-muted mb-2">Valor Estimado</h6>
                      <p class="mb-3 fw-bold">{{ formatarValor(licitacao.valorEstimado) }}</p>
                      
                      <h6 class="text-muted mb-2">Localização</h6>
                      <p class="mb-3">{{ licitacao.municipio }} - {{ licitacao.estado }}</p>
                    </div>
                  </div>
                  
                  <hr>
                  
                  <div class="row">
                    <div class="col-md-6">
                      <h6 class="text-muted mb-2">Data de Abertura</h6>
                      <p class="mb-3">{{ formatarData(licitacao.dataAbertura) }}</p>
                      
                      <h6 class="text-muted mb-2">Data de Encerramento</h6>
                      <p class="mb-3">{{ formatarData(licitacao.dataEncerramento) }}</p>
                    </div>
                    <div class="col-md-6">
                      <h6 class="text-muted mb-2">Número da Licitação</h6>
                      <p class="mb-3">{{ licitacao.numero }}</p>
                      
                      <h6 class="text-muted mb-2">Ano</h6>
                      <p class="mb-3">{{ licitacao.ano }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Cronograma -->
              <div class="card">
                <div class="card-header">
                  <h5>Cronograma</h5>
                </div>
                <div class="card-body">
                  <div class="timeline">
                    <div v-for="(evento, index) in licitacao.cronograma" :key="index" class="timeline-item">
                      <div class="timeline-marker"></div>
                      <div class="timeline-content">
                        <h6 class="mb-1">{{ evento.titulo }}</h6>
                        <p class="text-muted mb-0">{{ formatarDataHora(evento.data) }}</p>
                        <p v-if="evento.descricao" class="mt-1">{{ evento.descricao }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Documentos -->
              <div class="card">
                <div class="card-header">
                  <h5>Documentos</h5>
                </div>
                <div class="card-body">
                  <div v-if="licitacao.documentos && licitacao.documentos.length > 0" class="row">
                    <div v-for="documento in licitacao.documentos" :key="documento.id" class="col-md-6 mb-3">
                      <div class="d-flex align-items-center p-3 border rounded">
                        <div class="me-3">
                          <vue-feather type="file-text" class="text-primary"></vue-feather>
                        </div>
                        <div class="flex-grow-1">
                          <h6 class="mb-1">{{ documento.nome }}</h6>
                          <small class="text-muted">{{ documento.tipo }}</small>
                        </div>
                        <div>
                          <a :href="documento.url" target="_blank" class="btn btn-sm btn-outline-primary">
                            <vue-feather type="download" size="14"></vue-feather>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else class="text-center text-muted">
                    <vue-feather type="file-text" size="48" class="mb-3"></vue-feather>
                    <p>Nenhum documento disponível</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="col-lg-4">
              <!-- Resumo -->
              <div class="card">
                <div class="card-header">
                  <h5>Resumo</h5>
                </div>
                <div class="card-body">
                  <div class="row text-center">
                    <div class="col-6">
                      <div class="border-end">
                        <h4 class="text-primary">{{ licitacao.totalPropostas || 0 }}</h4>
                        <small class="text-muted">Propostas</small>
                      </div>
                    </div>
                    <div class="col-6">
                      <h4 class="text-success">{{ licitacao.propostasValidas || 0 }}</h4>
                      <small class="text-muted">Válidas</small>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Informações de Contato -->
              <div class="card">
                <div class="card-header">
                  <h5>Informações de Contato</h5>
                </div>
                <div class="card-body">
                  <div v-if="licitacao.contato">
                    <div class="d-flex align-items-center mb-3">
                      <vue-feather type="user" class="text-primary me-2"></vue-feather>
                      <div>
                        <h6 class="mb-0">{{ licitacao.contato.nome }}</h6>
                        <small class="text-muted">{{ licitacao.contato.cargo }}</small>
                      </div>
                    </div>
                    
                    <div class="d-flex align-items-center mb-3">
                      <vue-feather type="phone" class="text-primary me-2"></vue-feather>
                      <div>
                        <h6 class="mb-0">{{ licitacao.contato.telefone }}</h6>
                        <small class="text-muted">Telefone</small>
                      </div>
                    </div>
                    
                    <div class="d-flex align-items-center mb-3">
                      <vue-feather type="mail" class="text-primary me-2"></vue-feather>
                      <div>
                        <h6 class="mb-0">{{ licitacao.contato.email }}</h6>
                        <small class="text-muted">Email</small>
                      </div>
                    </div>
                  </div>
                  <div v-else class="text-center text-muted">
                    <vue-feather type="user" size="48" class="mb-3"></vue-feather>
                    <p>Informações de contato não disponíveis</p>
                  </div>
                </div>
              </div>

              <!-- Links Úteis -->
              <div class="card">
                <div class="card-header">
                  <h5>Links Úteis</h5>
                </div>
                <div class="card-body">
                  <div class="d-grid gap-2">
                    <a :href="licitacao.urlEdital" target="_blank" class="btn btn-outline-primary">
                      <vue-feather type="file-text" size="16" class="me-2"></vue-feather>
                      Edital Completo
                    </a>
                    <a :href="licitacao.urlSistema" target="_blank" class="btn btn-outline-info">
                      <vue-feather type="external-link" size="16" class="me-2"></vue-feather>
                      Sistema de Propostas
                    </a>
                    <a :href="licitacao.urlOrgao" target="_blank" class="btn btn-outline-secondary">
                      <vue-feather type="globe" size="16" class="me-2"></vue-feather>
                      Site do Órgão
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center">
            <vue-feather type="alert-circle" size="48" class="text-muted mb-3"></vue-feather>
            <h5>Licitação não encontrada</h5>
            <p class="text-muted">A licitação solicitada não foi encontrada ou não está disponível.</p>
            <button @click="voltar" class="btn btn-primary">
              <vue-feather type="arrow-left" size="16" class="me-2"></vue-feather>
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pncpApiService from '@/services/pncpApi.js'

export default {
  name: 'LicitacaoDetalhes',
  data() {
    return {
      licitacao: null,
      loading: true
    }
  },
  mounted() {
    this.carregarDetalhes()
  },
  methods: {
    async carregarDetalhes() {
      const id = this.$route.params.id
      if (!id) {
        this.$router.push('/licitacoes')
        return
      }

      try {
        const response = await pncpApiService.getLicitacaoDetalhes(id)
        this.licitacao = response
        
        // Verificar se está nos favoritos
        const favoritos = JSON.parse(localStorage.getItem('licitacoesFavoritas') || '[]')
        this.licitacao.favorita = favoritos.some(f => f.id === this.licitacao.id)
        
      } catch (error) {
        console.error('Erro ao carregar detalhes:', error)
        this.$toast.error('Erro ao carregar detalhes da licitação.')
      } finally {
        this.loading = false
      }
    },
    
    favoritar() {
      this.licitacao.favorita = !this.licitacao.favorita
      
      const favoritos = JSON.parse(localStorage.getItem('licitacoesFavoritas') || '[]')
      if (this.licitacao.favorita) {
        if (!favoritos.find(f => f.id === this.licitacao.id)) {
          favoritos.push(this.licitacao)
        }
      } else {
        const index = favoritos.findIndex(f => f.id === this.licitacao.id)
        if (index > -1) {
          favoritos.splice(index, 1)
        }
      }
      localStorage.setItem('licitacoesFavoritas', JSON.stringify(favoritos))
      
      this.$toast.success(
        this.licitacao.favorita ? 'Licitação adicionada aos favoritos!' : 'Licitação removida dos favoritos!'
      )
    },
    
    voltar() {
      this.$router.go(-1)
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
    
    formatarValor(valor) {
      if (!valor) return 'Não informado'
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(valor)
    },
    
    formatarData(data) {
      if (!data) return 'Não informada'
      return new Date(data).toLocaleDateString('pt-BR')
    },
    
    formatarDataHora(data) {
      if (!data) return 'Não informada'
      return new Date(data).toLocaleString('pt-BR')
    }
  }
}
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #e9ecef;
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-marker {
  position: absolute;
  left: -22px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #007bff;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #007bff;
}

.timeline-content {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  border-left: 3px solid #007bff;
}

.border-end {
  border-right: 1px solid #dee2e6 !important;
}

.card {
  margin-bottom: 20px;
}

.btn-group .btn {
  padding: 0.25rem 0.5rem;
}
</style> 