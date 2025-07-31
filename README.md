# 🏛️ Sistema de Licitações - Vances

Sistema completo de gerenciamento de licitações desenvolvido com Vue.js, oferecendo uma interface moderna e intuitiva para acompanhamento de processos licitatórios.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API e Integrações](#api-e-integrações)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

O **Sistema de Licitações Vances** é uma aplicação web desenvolvida para facilitar o acompanhamento e gerenciamento de processos licitatórios. O sistema oferece uma interface moderna e responsiva, permitindo aos usuários visualizar, filtrar e acompanhar licitações de forma eficiente.

### 🎨 Características Principais

- **Interface Moderna**: Design responsivo com tema dark mode
- **Dashboard Interativo**: Visualização de dados em tempo real
- **Filtros Avançados**: Busca e filtragem por múltiplos critérios
- **Integração com APIs**: Conectividade com sistemas externos
- **Notificações**: Sistema de alertas e notificações
- **Relatórios**: Geração de relatórios e exportação de dados

## 🚀 Funcionalidades

### 📊 Dashboard Principal
- Visão geral das licitações ativas
- Estatísticas em tempo real
- Gráficos e métricas importantes
- Widgets personalizáveis

### 🔍 Sistema de Busca
- Busca por número da licitação
- Filtros por órgão, modalidade, status
- Filtros por data e valor
- Busca avançada com múltiplos critérios

### 📋 Gestão de Licitações
- Listagem completa de licitações
- Detalhamento de cada processo
- Acompanhamento de status
- Histórico de alterações

### 🔔 Notificações
- Alertas de novas licitações
- Notificações de prazos
- Sistema de lembretes
- Configurações personalizáveis

### 📈 Relatórios
- Relatórios por período
- Exportação em múltiplos formatos
- Gráficos e estatísticas
- Análises comparativas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Vue.js 3**: Framework principal
- **Vue Router**: Roteamento da aplicação
- **Vuex**: Gerenciamento de estado
- **Tailwind CSS**: Framework de estilização
- **Vue 3 Composition API**: Arquitetura moderna

### UI/UX
- **Vue 3**: Interface moderna
- **Responsive Design**: Compatível com todos os dispositivos
- **Dark Mode**: Tema escuro por padrão
- **Componentes Reutilizáveis**: Arquitetura modular

### Desenvolvimento
- **Node.js**: Runtime JavaScript
- **npm**: Gerenciador de pacotes
- **Vue CLI**: Ferramentas de desenvolvimento
- **ESLint**: Linting de código
- **Prettier**: Formatação de código

### APIs e Integrações
- **REST APIs**: Comunicação com backend
- **Axios**: Cliente HTTP
- **JSON**: Formato de dados
- **CORS**: Configuração de segurança

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (versão 8 ou superior)
- **Git** (para clonar o repositório)

### Verificando as versões:
```bash
node --version
npm --version
git --version
```

## 🚀 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/AdvancesSolutions/licitacoes.git
cd licitacoes
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

### 4. Execute o projeto
```bash
npm run serve
```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Configurações da API
VUE_APP_API_BASE_URL=https://api.exemplo.com
VUE_APP_API_TIMEOUT=30000

# Configurações da aplicação
VUE_APP_TITLE=Sistema de Licitações
VUE_APP_VERSION=1.0.0

# Configurações de desenvolvimento
NODE_ENV=development
```

### Configuração do Banco de Dados

O sistema utiliza APIs REST para comunicação com o backend. Configure as URLs das APIs no arquivo de configuração.

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento
```bash
# Inicia o servidor de desenvolvimento
npm run serve

# Acesse: http://localhost:8080
```

### Produção
```bash
# Gera build de produção
npm run build

# Serve os arquivos de produção
npm run serve:prod
```

### Linting e Formatação
```bash
# Executa o linter
npm run lint

# Corrige problemas de linting
npm run lint:fix

# Formata o código
npm run format
```

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Recursos estáticos (CSS, imagens, fontes)
├── components/       # Componentes reutilizáveis
├── pages/           # Páginas da aplicação
│   ├── dashboard/   # Dashboard principal
│   ├── licitacoes/  # Páginas de licitações
│   └── ...
├── router/          # Configuração de rotas
├── store/           # Gerenciamento de estado (Vuex)
├── services/        # Serviços e APIs
├── mixins/          # Mixins Vue.js
├── constants/       # Constantes da aplicação
├── data/            # Dados estáticos
└── locales/         # Arquivos de internacionalização
```

### Componentes Principais

- **Dashboard**: Página principal com widgets e estatísticas
- **Licitacoes**: Listagem e detalhes de licitações
- **Header**: Cabeçalho da aplicação
- **Sidebar**: Menu lateral de navegação
- **Widgets**: Componentes de dashboard

## 🔌 API e Integrações

### Endpoints Principais

```javascript
// Configuração da API
const API_CONFIG = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: process.env.VUE_APP_API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
}
```

### Serviços Implementados

- **pncpApi.js**: Integração com API de licitações
- **mockData.js**: Dados de exemplo para desenvolvimento

### Exemplo de Uso da API

```javascript
import { getLicitacoes } from '@/services/pncpApi'

// Buscar licitações
const licitacoes = await getLicitacoes({
  page: 1,
  size: 20,
  filters: {
    status: 'ativa',
    modalidade: 'pregão'
  }
})
```

## 🚀 Deploy

### Build de Produção
```bash
# Gera os arquivos otimizados
npm run build

# Os arquivos ficam em: dist/
```

### Deploy no Servidor

1. **Faça o build da aplicação**
2. **Copie os arquivos da pasta `dist/` para o servidor**
3. **Configure o servidor web (Apache/Nginx)**
4. **Configure as variáveis de ambiente**

### Configuração do Servidor Web

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## 🤝 Contribuição

### Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit suas mudanças**
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. **Push para a branch**
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request**

### Padrões de Código

- Use **ESLint** para manter a qualidade do código
- Siga os padrões de **nomenclatura** estabelecidos
- Documente funções e componentes importantes
- Teste suas alterações antes de submeter

### Estrutura de Commits

```
feat: adiciona nova funcionalidade
fix: corrige bug na busca
docs: atualiza documentação
style: formata código
refactor: refatora componente
test: adiciona testes
chore: atualiza dependências
```

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

### Contato

- **Email**: suporte@advances.com.br
- **Telefone**: (11) 99999-9999
- **Website**: https://advances.com.br

### Documentação Adicional

- [Guia de Desenvolvimento](docs/DEVELOPMENT.md)
- [Guia de Deploy](docs/DEPLOY.md)
- [API Documentation](docs/API.md)

## 🎉 Agradecimentos

- **Equipe Advances Solutions**
- **Contribuidores do projeto**
- **Comunidade Vue.js**

---

**Desenvolvido com ❤️ pela Advances Solutions**

*Versão 1.0.0 - Janeiro 2025*
