<template>
  <Breadcrumbs main="Licitações" title="Teste da API PNCP" />
  <div class="container-fluid w-full">
    <div class="row size-column">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">
              <i class="fa fa-cogs me-2"></i>Teste da API PNCP V2
            </h5>
          </div>
          <div class="card-body">
            <!-- Status da API -->
            <div class="row mb-4">
              <div class="col-12">
                <div class="alert" :class="apiStatus ? 'alert-success' : 'alert-danger'">
                  <i class="fa fa-info-circle me-2"></i>
                  Status da API: {{ apiStatus ? 'Conectado' : 'Desconectado' }}
                </div>
              </div>
            </div>

            <!-- Testes de Endpoints -->
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h6>1. Consultar Itens de PCA</h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Ano:</label>
                      <input v-model="testePCA.ano" type="number" class="form-control" placeholder="2024">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">ID Usuário:</label>
                      <input v-model="testePCA.idUsuario" type="text" class="form-control" placeholder="ID do usuário">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Classificação Superior:</label>
                      <input v-model="testePCA.classificacaoSuperior" type="text" class="form-control" placeholder="Classificação">
                    </div>
                    <button @click="testarPCA" class="btn btn-primary" :disabled="loading">
                      <i class="fa fa-search me-2"></i>Testar PCA
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h6>2. Consultar Contratações por Data</h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Data Inicial:</label>
                      <input v-model="testeContratacoes.dataInicial" type="date" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Data Final:</label>
                      <input v-model="testeContratacoes.dataFinal" type="date" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Modalidade:</label>
                      <select v-model="testeContratacoes.modalidadeId" class="form-control">
                        <option value="">Todas</option>
                        <option v-for="(nome, id) in modalidades" :key="id" :value="id">{{ nome }}</option>
                      </select>
                    </div>
                    <button @click="testarContratacoes" class="btn btn-primary" :disabled="loading">
                      <i class="fa fa-search me-2"></i>Testar Contratações
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h6>3. Consultar Contratações em Aberto</h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Data Final:</label>
                      <input v-model="testeEmAberto.dataFinal" type="date" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Modalidade:</label>
                      <select v-model="testeEmAberto.modalidadeId" class="form-control">
                        <option value="">Todas</option>
                        <option v-for="(nome, id) in modalidades" :key="id" :value="id">{{ nome }}</option>
                      </select>
                    </div>
                    <button @click="testarEmAberto" class="btn btn-primary" :disabled="loading">
                      <i class="fa fa-search me-2"></i>Testar Em Aberto
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h6>4. Consultar Atas de Registro de Preço</h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Data Inicial:</label>
                      <input v-model="testeAtas.dataInicial" type="date" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Data Final:</label>
                      <input v-model="testeAtas.dataFinal" type="date" class="form-control">
                    </div>
                    <button @click="testarAtas" class="btn btn-primary" :disabled="loading">
                      <i class="fa fa-search me-2"></i>Testar Atas
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h6>5. Consultar Contratos por Data</h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Data Inicial:</label>
                      <input v-model="testeContratos.dataInicial" type="date" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Data Final:</label>
                      <input v-model="testeContratos.dataFinal" type="date" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Tipo de Contrato:</label>
                      <select v-model="testeContratos.tipoContratoId" class="form-control">
                        <option value="">Todos</option>
                        <option v-for="(nome, id) in tiposContrato" :key="id" :value="id">{{ nome }}</option>
                      </select>
                    </div>
                    <button @click="testarContratos" class="btn btn-primary" :disabled="loading">
                      <i class="fa fa-search me-2"></i>Testar Contratos
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">
                    <h6>6. Tabelas de Domínio</h6>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label class="form-label">Selecionar Tabela:</label>
                      <select v-model="tabelaSelecionada" class="form-control" @change="carregarTabela">
                        <option value="">Selecione uma tabela</option>
                        <option value="modalidades">Modalidades de Contratação</option>
                        <option value="modosDisputa">Modos de Disputa</option>
                        <option value="criteriosJulgamento">Critérios de Julgamento</option>
                        <option value="situacoesContratacao">Situações de Contratação</option>
                        <option value="tiposContrato">Tipos de Contrato</option>
                        <option value="categoriasProcesso">Categorias de Processo</option>
                      </select>
                    </div>
                    <button @click="carregarTabela" class="btn btn-secondary" :disabled="!tabelaSelecionada">
                      <i class="fa fa-table me-2"></i>Carregar Tabela
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Resultados -->
            <div class="row mt-4" v-if="resultados.length > 0">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h6>Resultados dos Testes</h6>
                  </div>
                  <div class="card-body">
                    <div v-for="(resultado, index) in resultados" :key="index" class="mb-3">
                      <div class="alert" :class="resultado.success ? 'alert-success' : 'alert-danger'">
                        <h6>{{ resultado.titulo }}</h6>
                        <p class="mb-2">{{ resultado.mensagem }}</p>
                        <div v-if="resultado.data" class="mt-2">
                          <strong>Dados:</strong>
                          <pre class="mt-2 p-2 bg-light rounded">{{ JSON.stringify(resultado.data, null, 2) }}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tabela de Domínio -->
            <div class="row mt-4" v-if="tabelaDomínio.length > 0">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h6>Tabela de Domínio: {{ nomeTabelaSelecionada }}</h6>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(descricao, codigo) in tabelaDomínio" :key="codigo">
                            <td>{{ codigo }}</td>
                            <td>{{ descricao }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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

export default {
  name: 'TesteApiPNCP',
  data() {
    return {
      loading: false,
      apiStatus: false,
      resultados: [],
      tabelaSelecionada: '',
      nomeTabelaSelecionada: '',
      tabelaDomínio: [],
      
      // Dados para testes
      testePCA: {
        ano: 2024,
        idUsuario: '',
        classificacaoSuperior: ''
      },
      testeContratacoes: {
        dataInicial: new Date().toISOString().split('T')[0],
        dataFinal: new Date().toISOString().split('T')[0],
        modalidadeId: ''
      },
      testeEmAberto: {
        dataFinal: new Date().toISOString().split('T')[0],
        modalidadeId: ''
      },
      testeAtas: {
        dataInicial: new Date().toISOString().split('T')[0],
        dataFinal: new Date().toISOString().split('T')[0]
      },
      testeContratos: {
        dataInicial: new Date().toISOString().split('T')[0],
        dataFinal: new Date().toISOString().split('T')[0],
        tipoContratoId: ''
      }
    }
  },
  computed: {
    modalidades() {
      return pncpApiService.getModalidadesContratacao()
    },
    tiposContrato() {
      return pncpApiService.getTiposContrato()
    }
  },
  mounted() {
    this.testarConexao()
  },
  methods: {
    async testarConexao() {
      try {
        this.apiStatus = await pncpApiService.testarConexao()
        this.adicionarResultado('Teste de Conexão', 'Conexão com a API testada com sucesso', null, this.apiStatus)
      } catch (error) {
        this.apiStatus = false
        this.adicionarResultado('Teste de Conexão', 'Erro ao conectar com a API', error.message, false)
      }
    },

    async testarPCA() {
      this.loading = true
      try {
        const resultado = await pncpApiService.consultarItensPCA(
          this.testePCA.ano,
          this.testePCA.idUsuario,
          this.testePCA.classificacaoSuperior
        )
        this.adicionarResultado('Consulta PCA', 'Itens de PCA consultados com sucesso', resultado, true)
      } catch (error) {
        this.adicionarResultado('Consulta PCA', 'Erro ao consultar itens de PCA', error.message, false)
      } finally {
        this.loading = false
      }
    },

    async testarContratacoes() {
      this.loading = true
      try {
        const resultado = await pncpApiService.consultarContratacoesPorData(
          this.testeContratacoes.dataInicial,
          this.testeContratacoes.dataFinal,
          {
            modalidadeId: this.testeContratacoes.modalidadeId,
            pagina: 1,
            tamanho: 10
          }
        )
        this.adicionarResultado('Consulta Contratações', 'Contratações consultadas com sucesso', resultado, true)
      } catch (error) {
        this.adicionarResultado('Consulta Contratações', 'Erro ao consultar contratações', error.message, false)
      } finally {
        this.loading = false
      }
    },

    async testarEmAberto() {
      this.loading = true
      try {
        const resultado = await pncpApiService.consultarContratacoesEmAberto(
          this.testeEmAberto.dataFinal,
          {
            modalidadeId: this.testeEmAberto.modalidadeId,
            pagina: 1,
            tamanho: 10
          }
        )
        this.adicionarResultado('Consulta Em Aberto', 'Contratações em aberto consultadas com sucesso', resultado, true)
      } catch (error) {
        this.adicionarResultado('Consulta Em Aberto', 'Erro ao consultar contratações em aberto', error.message, false)
      } finally {
        this.loading = false
      }
    },

    async testarAtas() {
      this.loading = true
      try {
        const resultado = await pncpApiService.consultarAtasRegistroPreco(
          this.testeAtas.dataInicial,
          this.testeAtas.dataFinal,
          {
            pagina: 1,
            tamanho: 10
          }
        )
        this.adicionarResultado('Consulta Atas', 'Atas de registro de preço consultadas com sucesso', resultado, true)
      } catch (error) {
        this.adicionarResultado('Consulta Atas', 'Erro ao consultar atas de registro de preço', error.message, false)
      } finally {
        this.loading = false
      }
    },

    async testarContratos() {
      this.loading = true
      try {
        const resultado = await pncpApiService.consultarContratosPorData(
          this.testeContratos.dataInicial,
          this.testeContratos.dataFinal,
          {
            tipoContratoId: this.testeContratos.tipoContratoId,
            pagina: 1,
            tamanho: 10
          }
        )
        this.adicionarResultado('Consulta Contratos', 'Contratos consultados com sucesso', resultado, true)
      } catch (error) {
        this.adicionarResultado('Consulta Contratos', 'Erro ao consultar contratos', error.message, false)
      } finally {
        this.loading = false
      }
    },

    carregarTabela() {
      if (!this.tabelaSelecionada) return

      let tabela = {}
      let nome = ''

      switch (this.tabelaSelecionada) {
        case 'modalidades':
          tabela = pncpApiService.getModalidadesContratacao()
          nome = 'Modalidades de Contratação'
          break
        case 'modosDisputa':
          tabela = pncpApiService.getModosDisputa()
          nome = 'Modos de Disputa'
          break
        case 'criteriosJulgamento':
          tabela = pncpApiService.getCriteriosJulgamento()
          nome = 'Critérios de Julgamento'
          break
        case 'situacoesContratacao':
          tabela = pncpApiService.getSituacoesContratacao()
          nome = 'Situações de Contratação'
          break
        case 'tiposContrato':
          tabela = pncpApiService.getTiposContrato()
          nome = 'Tipos de Contrato'
          break
        case 'categoriasProcesso':
          tabela = pncpApiService.getCategoriasProcesso()
          nome = 'Categorias de Processo'
          break
      }

      this.tabelaDomínio = tabela
      this.nomeTabelaSelecionada = nome
    },

    adicionarResultado(titulo, mensagem, data, success) {
      this.resultados.unshift({
        titulo,
        mensagem,
        data,
        success,
        timestamp: new Date().toLocaleTimeString()
      })

      // Manter apenas os últimos 10 resultados
      if (this.resultados.length > 10) {
        this.resultados = this.resultados.slice(0, 10)
      }
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}

.alert pre {
  font-size: 0.875rem;
  max-height: 200px;
  overflow-y: auto;
}

.table-responsive {
  max-height: 400px;
  overflow-y: auto;
}
</style> 