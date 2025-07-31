# 🛠️ Guia de Desenvolvimento

Este guia contém todas as informações necessárias para desenvolvedores que desejam contribuir ou trabalhar no **Sistema de Licitações Vances**.

## 📋 Índice

- [Configuração do Ambiente](#configuração-do-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Código](#padrões-de-código)
- [Componentes](#componentes)
- [Estado da Aplicação](#estado-da-aplicação)
- [Roteamento](#roteamento)
- [APIs e Serviços](#apis-e-serviços)
- [Testes](#testes)
- [Debugging](#debugging)
- [Performance](#performance)

## 🚀 Configuração do Ambiente

### Pré-requisitos

```bash
# Verifique as versões
node --version  # >= 16.0.0
npm --version   # >= 8.0.0
git --version   # >= 2.0.0
```

### Instalação

```bash
# Clone o repositório
git clone https://github.com/AdvancesSolutions/licitacoes.git
cd licitacoes

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm run serve
```

### IDEs Recomendadas

- **VS Code** (recomendado)
  - Extensões: Vetur, Vue VSCode Snippets, ESLint, Prettier
- **WebStorm** / **IntelliJ IDEA**
- **Sublime Text** com plugins Vue.js

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Recursos estáticos
│   ├── css/            # Estilos globais
│   ├── images/         # Imagens
│   ├── fonts/          # Fontes
│   └── scss/           # Arquivos SCSS
├── components/          # Componentes reutilizáveis
│   ├── header/         # Componentes do cabeçalho
│   ├── sidebar/        # Componentes da barra lateral
│   └── customizer/     # Componentes de customização
├── pages/              # Páginas da aplicação
│   ├── dashboard/      # Dashboard principal
│   ├── licitacoes/     # Páginas de licitações
│   ├── auth/           # Páginas de autenticação
│   └── ...
├── router/             # Configuração de rotas
├── store/              # Gerenciamento de estado (Vuex)
│   └── modules/        # Módulos do Vuex
├── services/           # Serviços e APIs
├── mixins/             # Mixins Vue.js
├── constants/          # Constantes da aplicação
├── data/               # Dados estáticos
├── locales/            # Arquivos de internacionalização
└── main.js             # Ponto de entrada da aplicação
```

## 📝 Padrões de Código

### Nomenclatura

#### Arquivos e Pastas
```bash
# Componentes: PascalCase
UserProfile.vue
DashboardWidget.vue

# Páginas: kebab-case
user-profile.vue
dashboard-widget.vue

# Pastas: kebab-case
user-profile/
dashboard-widget/
```

#### Variáveis e Funções
```javascript
// Variáveis: camelCase
const userName = 'João'
const isActive = true

// Funções: camelCase
function getUserData() { }
const handleClick = () => { }

// Constantes: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.exemplo.com'
const MAX_RETRY_ATTEMPTS = 3
```

#### Componentes Vue
```vue
<template>
  <!-- Use kebab-case para atributos HTML -->
  <div class="user-profile">
    <user-avatar :user-id="userId" />
  </div>
</template>

<script>
export default {
  name: 'UserProfile', // PascalCase para nome do componente
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      userName: '', // camelCase para dados
      isLoading: false
    }
  }
}
</script>
```

### Estrutura de Componentes

```vue
<template>
  <!-- Template sempre primeiro -->
  <div class="component-name">
    <!-- Conteúdo do template -->
  </div>
</template>

<script>
// Script sempre segundo
export default {
  name: 'ComponentName',
  components: {
    // Componentes importados
  },
  props: {
    // Props do componente
  },
  data() {
    return {
      // Dados locais
    }
  },
  computed: {
    // Propriedades computadas
  },
  watch: {
    // Watchers
  },
  created() {
    // Lifecycle hooks
  },
  mounted() {
    // Lifecycle hooks
  },
  methods: {
    // Métodos do componente
  }
}
</script>

<style scoped>
/* Estilos sempre por último */
.component-name {
  /* Estilos do componente */
}
</style>
```

## 🧩 Componentes

### Criando um Novo Componente

```bash
# Estrutura recomendada para novos componentes
src/components/
├── MyComponent/
│   ├── index.vue          # Componente principal
│   ├── MyComponent.vue    # Componente específico
│   └── README.md          # Documentação do componente
```

### Exemplo de Componente

```vue
<template>
  <div class="licitacao-card">
    <div class="card-header">
      <h3>{{ licitacao.titulo }}</h3>
      <span :class="['status', licitacao.status]">
        {{ licitacao.status }}
      </span>
    </div>
    
    <div class="card-body">
      <p>{{ licitacao.descricao }}</p>
      <div class="meta-info">
        <span>Órgão: {{ licitacao.orgao }}</span>
        <span>Valor: {{ formatCurrency(licitacao.valor) }}</span>
      </div>
    </div>
    
    <div class="card-actions">
      <button @click="viewDetails" class="btn-primary">
        Ver Detalhes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LicitacaoCard',
  props: {
    licitacao: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.titulo && value.status
      }
    }
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value)
    },
    viewDetails() {
      this.$router.push(`/licitacoes/${this.licitacao.id}`)
    }
  }
}
</script>

<style scoped>
.licitacao-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.status {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.status.ativa {
  background-color: #dcfce7;
  color: #166534;
}

.status.finalizada {
  background-color: #fef3c7;
  color: #92400e;
}
</style>
```

## 🗃️ Estado da Aplicação

### Estrutura do Vuex

```javascript
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import licitacoes from './modules/licitacoes'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    licitacoes,
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})
```

### Exemplo de Módulo Vuex

```javascript
// store/modules/licitacoes.js
import { getLicitacoes } from '@/services/pncpApi'

export default {
  namespaced: true,
  state: {
    licitacoes: [],
    loading: false,
    error: null,
    filters: {
      status: '',
      modalidade: '',
      orgao: ''
    }
  },
  
  getters: {
    licitacoesAtivas: (state) => {
      return state.licitacoes.filter(l => l.status === 'ativa')
    },
    
    licitacoesFiltradas: (state) => {
      return state.licitacoes.filter(l => {
        if (state.filters.status && l.status !== state.filters.status) return false
        if (state.filters.modalidade && l.modalidade !== state.filters.modalidade) return false
        if (state.filters.orgao && l.orgao !== state.filters.orgao) return false
        return true
      })
    }
  },
  
  mutations: {
    SET_LICITACOES(state, licitacoes) {
      state.licitacoes = licitacoes
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_FILTERS(state, filters) {
      state.filters = { ...state.filters, ...filters }
    }
  },
  
  actions: {
    async fetchLicitacoes({ commit }, params = {}) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      
      try {
        const licitacoes = await getLicitacoes(params)
        commit('SET_LICITACOES', licitacoes)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    
    updateFilters({ commit }, filters) {
      commit('SET_FILTERS', filters)
    }
  }
}
```

## 🛣️ Roteamento

### Configuração de Rotas

```javascript
// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/pages/dashboard/default.vue'
import Licitacoes from '@/pages/licitacoes/index.vue'
import LicitacaoDetalhes from '@/pages/licitacoes/detalhes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard',
      requiresAuth: true
    }
  },
  {
    path: '/licitacoes',
    name: 'Licitacoes',
    component: Licitacoes,
    meta: {
      title: 'Licitações',
      requiresAuth: true
    }
  },
  {
    path: '/licitacoes/:id',
    name: 'LicitacaoDetalhes',
    component: LicitacaoDetalhes,
    props: true,
    meta: {
      title: 'Detalhes da Licitação',
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Verificar autenticação
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})

export default router
```

## 🔌 APIs e Serviços

### Estrutura de Serviços

```javascript
// services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: process.env.VUE_APP_API_TIMEOUT || 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptors
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirecionar para login
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default api
```

### Exemplo de Serviço

```javascript
// services/licitacoes.js
import api from './api'

export const licitacoesService = {
  async getLicitacoes(params = {}) {
    const response = await api.get('/licitacoes', { params })
    return response.data
  },
  
  async getLicitacao(id) {
    const response = await api.get(`/licitacoes/${id}`)
    return response.data
  },
  
  async createLicitacao(data) {
    const response = await api.post('/licitacoes', data)
    return response.data
  },
  
  async updateLicitacao(id, data) {
    const response = await api.put(`/licitacoes/${id}`, data)
    return response.data
  },
  
  async deleteLicitacao(id) {
    await api.delete(`/licitacoes/${id}`)
  }
}
```

## 🧪 Testes

### Configuração de Testes

```bash
# Instalar dependências de teste
npm install --save-dev @vue/test-utils jest @vue/cli-plugin-unit-jest
```

### Exemplo de Teste

```javascript
// tests/unit/components/LicitacaoCard.spec.js
import { shallowMount } from '@vue/test-utils'
import LicitacaoCard from '@/components/LicitacaoCard.vue'

describe('LicitacaoCard', () => {
  const mockLicitacao = {
    id: 1,
    titulo: 'Licitação Teste',
    status: 'ativa',
    orgao: 'Órgão Teste',
    valor: 100000
  }

  it('renderiza corretamente', () => {
    const wrapper = shallowMount(LicitacaoCard, {
      propsData: {
        licitacao: mockLicitacao
      }
    })

    expect(wrapper.find('.licitacao-card').exists()).toBe(true)
    expect(wrapper.text()).toContain('Licitação Teste')
  })

  it('emite evento ao clicar em ver detalhes', () => {
    const wrapper = shallowMount(LicitacaoCard, {
      propsData: {
        licitacao: mockLicitacao
      }
    })

    wrapper.find('.btn-primary').trigger('click')
    expect(wrapper.emitted().viewDetails).toBeTruthy()
  })
})
```

## 🐛 Debugging

### Vue DevTools

Instale a extensão Vue DevTools no seu navegador para debugging:

- **Chrome**: [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- **Firefox**: [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

### Console Debugging

```javascript
// Debugging no console
console.log('Dados da licitação:', this.licitacao)

// Debugging com breakpoints
debugger

// Debugging de componentes
this.$log('Componente renderizado')
```

### Performance Monitoring

```javascript
// Monitoramento de performance
const startTime = performance.now()

// ... código a ser medido ...

const endTime = performance.now()
console.log(`Tempo de execução: ${endTime - startTime}ms`)
```

## ⚡ Performance

### Otimizações Recomendadas

1. **Lazy Loading de Componentes**
```javascript
const LicitacaoDetalhes = () => import('@/pages/licitacoes/detalhes.vue')
```

2. **Memoização de Computed Properties**
```javascript
computed: {
  licitacoesFiltradas() {
    return this.licitacoes.filter(l => {
      // Lógica de filtro
    })
  }
}
```

3. **Debounce em Inputs**
```javascript
import { debounce } from 'lodash'

methods: {
  handleSearch: debounce(function(query) {
    this.searchLicitacoes(query)
  }, 300)
}
```

4. **Virtual Scrolling para Listas Grandes**
```vue
<template>
  <virtual-list
    :items="licitacoes"
    :item-height="60"
    v-slot="{ item }"
  >
    <licitacao-card :licitacao="item" />
  </virtual-list>
</template>
```

## 📚 Recursos Adicionais

### Documentação Oficial

- [Vue.js Guide](https://vuejs.org/guide/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue CLI](https://cli.vuejs.org/)

### Ferramentas Úteis

- **Vue DevTools**: Debugging e inspeção
- **Vetur**: IntelliSense para Vue
- **ESLint**: Linting de código
- **Prettier**: Formatação de código

### Comunidade

- [Vue.js Forum](https://forum.vuejs.org/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vue.js)
- [Vue.js Discord](https://discord.gg/vue)

---

**Desenvolvido com ❤️ pela Advances Solutions** 