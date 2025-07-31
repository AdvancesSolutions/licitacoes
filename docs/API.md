# 🔌 API Documentation

Documentação completa da API do **Sistema de Licitações Vances**.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Autenticação](#autenticação)
- [Endpoints](#endpoints)
- [Códigos de Status](#códigos-de-status)
- [Exemplos de Uso](#exemplos-de-uso)
- [Rate Limiting](#rate-limiting)
- [Webhooks](#webhooks)
- [SDKs](#sdks)
- [Troubleshooting](#troubleshooting)

## 🌐 Visão Geral

### Base URL
```
Produção: https://api.advances.com.br/v1
Desenvolvimento: https://api-dev.advances.com.br/v1
```

### Formato de Resposta
Todas as respostas da API seguem o formato JSON:

```json
{
  "success": true,
  "data": {
    // Dados da resposta
  },
  "message": "Operação realizada com sucesso",
  "timestamp": "2025-01-31T13:04:00Z",
  "version": "1.0.0"
}
```

### Headers Obrigatórios
```http
Content-Type: application/json
Authorization: Bearer <token>
Accept: application/json
```

## 🔐 Autenticação

### OAuth 2.0

A API utiliza OAuth 2.0 para autenticação. Para obter um token de acesso:

```bash
curl -X POST https://api.advances.com.br/oauth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "client_credentials",
    "client_id": "your_client_id",
    "client_secret": "your_client_secret"
  }'
```

### Resposta de Autenticação
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "def50200..."
}
```

### Usando o Token
```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  https://api.advances.com.br/v1/licitacoes
```

## 📡 Endpoints

### Licitações

#### GET /licitacoes
Lista todas as licitações com paginação e filtros.

**Parâmetros de Query:**
- `page` (int): Número da página (padrão: 1)
- `limit` (int): Itens por página (padrão: 20, máximo: 100)
- `status` (string): Filtro por status (ativa, finalizada, cancelada)
- `modalidade` (string): Filtro por modalidade
- `orgao` (string): Filtro por órgão
- `data_inicio` (date): Data de início (YYYY-MM-DD)
- `data_fim` (date): Data de fim (YYYY-MM-DD)
- `valor_min` (float): Valor mínimo
- `valor_max` (float): Valor máximo
- `search` (string): Busca por texto

**Exemplo:**
```bash
curl -X GET \
  "https://api.advances.com.br/v1/licitacoes?page=1&limit=20&status=ativa" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Resposta:**
```json
{
  "success": true,
  "data": {
    "licitacoes": [
      {
        "id": "12345",
        "numero": "001/2025",
        "titulo": "Aquisição de Equipamentos de Informática",
        "descricao": "Aquisição de computadores, impressoras e periféricos",
        "status": "ativa",
        "modalidade": "pregão",
        "orgao": "Prefeitura Municipal",
        "valor": 150000.00,
        "data_abertura": "2025-02-15T14:00:00Z",
        "data_encerramento": "2025-02-20T18:00:00Z",
        "local": "Auditório Municipal",
        "edital_url": "https://example.com/edital.pdf",
        "created_at": "2025-01-31T10:00:00Z",
        "updated_at": "2025-01-31T10:00:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 5,
      "total_items": 100,
      "items_per_page": 20,
      "has_next": true,
      "has_prev": false
    }
  },
  "message": "Licitações recuperadas com sucesso"
}
```

#### GET /licitacoes/{id}
Obtém detalhes de uma licitação específica.

**Exemplo:**
```bash
curl -X GET \
  "https://api.advances.com.br/v1/licitacoes/12345" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Resposta:**
```json
{
  "success": true,
  "data": {
    "id": "12345",
    "numero": "001/2025",
    "titulo": "Aquisição de Equipamentos de Informática",
    "descricao": "Aquisição de computadores, impressoras e periféricos",
    "status": "ativa",
    "modalidade": "pregão",
    "orgao": {
      "id": "1",
      "nome": "Prefeitura Municipal",
      "cnpj": "12.345.678/0001-90",
      "endereco": "Rua das Flores, 123",
      "cidade": "São Paulo",
      "estado": "SP"
    },
    "valor": 150000.00,
    "data_abertura": "2025-02-15T14:00:00Z",
    "data_encerramento": "2025-02-20T18:00:00Z",
    "local": "Auditório Municipal",
    "edital_url": "https://example.com/edital.pdf",
    "anexos": [
      {
        "id": "1",
        "nome": "Edital Completo",
        "url": "https://example.com/edital.pdf",
        "tamanho": 2048576,
        "tipo": "application/pdf"
      }
    ],
    "lotes": [
      {
        "id": "1",
        "numero": "Lote 1",
        "descricao": "Computadores Desktop",
        "quantidade": 50,
        "valor_unitario": 2000.00,
        "valor_total": 100000.00
      }
    ],
    "participantes": [
      {
        "id": "1",
        "nome": "Empresa ABC Ltda",
        "cnpj": "98.765.432/0001-10",
        "status": "habilitada"
      }
    ],
    "created_at": "2025-01-31T10:00:00Z",
    "updated_at": "2025-01-31T10:00:00Z"
  }
}
```

#### POST /licitacoes
Cria uma nova licitação (requer permissões especiais).

**Exemplo:**
```bash
curl -X POST \
  "https://api.advances.com.br/v1/licitacoes" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "numero": "002/2025",
    "titulo": "Construção de Escola Municipal",
    "descricao": "Construção de escola com 10 salas de aula",
    "modalidade": "concorrência",
    "orgao_id": "1",
    "valor": 500000.00,
    "data_abertura": "2025-03-01T14:00:00Z",
    "data_encerramento": "2025-03-10T18:00:00Z",
    "local": "Secretaria de Educação"
  }'
```

#### PUT /licitacoes/{id}
Atualiza uma licitação existente.

#### DELETE /licitacoes/{id}
Remove uma licitação (soft delete).

### Órgãos

#### GET /orgaos
Lista todos os órgãos.

**Parâmetros:**
- `page` (int): Número da página
- `limit` (int): Itens por página
- `search` (string): Busca por nome

**Exemplo:**
```bash
curl -X GET \
  "https://api.advances.com.br/v1/orgaos?page=1&limit=20" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Resposta:**
```json
{
  "success": true,
  "data": {
    "orgaos": [
      {
        "id": "1",
        "nome": "Prefeitura Municipal",
        "cnpj": "12.345.678/0001-90",
        "endereco": "Rua das Flores, 123",
        "cidade": "São Paulo",
        "estado": "SP",
        "telefone": "(11) 1234-5678",
        "email": "contato@prefeitura.sp.gov.br",
        "website": "https://www.prefeitura.sp.gov.br",
        "created_at": "2025-01-31T10:00:00Z"
      }
    ],
    "pagination": {
      "current_page": 1,
      "total_pages": 3,
      "total_items": 50,
      "items_per_page": 20
    }
  }
}
```

#### GET /orgaos/{id}
Obtém detalhes de um órgão específico.

#### GET /orgaos/{id}/licitacoes
Lista licitações de um órgão específico.

### Estatísticas

#### GET /stats/geral
Estatísticas gerais do sistema.

**Exemplo:**
```bash
curl -X GET \
  "https://api.advances.com.br/v1/stats/geral" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Resposta:**
```json
{
  "success": true,
  "data": {
    "total_licitacoes": 1250,
    "licitacoes_ativas": 45,
    "licitacoes_finalizadas": 1200,
    "licitacoes_canceladas": 5,
    "valor_total": 15000000.00,
    "valor_medio": 12000.00,
    "orgaos_ativos": 25,
    "participantes_ativos": 150,
    "periodo": {
      "inicio": "2025-01-01",
      "fim": "2025-01-31"
    }
  }
}
```

#### GET /stats/orgao/{id}
Estatísticas de um órgão específico.

#### GET /stats/modalidade
Estatísticas por modalidade de licitação.

### Busca Avançada

#### POST /search
Busca avançada com múltiplos critérios.

**Exemplo:**
```bash
curl -X POST \
  "https://api.advances.com.br/v1/search" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "equipamentos informática",
    "filters": {
      "status": ["ativa", "finalizada"],
      "modalidade": ["pregão", "concorrência"],
      "valor_min": 10000,
      "valor_max": 100000,
      "data_inicio": "2025-01-01",
      "data_fim": "2025-12-31"
    },
    "sort": {
      "field": "data_abertura",
      "order": "desc"
    },
    "page": 1,
    "limit": 20
  }'
```

## 📊 Códigos de Status

### Sucesso
- `200 OK`: Requisição bem-sucedida
- `201 Created`: Recurso criado com sucesso
- `204 No Content`: Requisição bem-sucedida sem conteúdo

### Erro do Cliente
- `400 Bad Request`: Requisição inválida
- `401 Unauthorized`: Não autenticado
- `403 Forbidden`: Não autorizado
- `404 Not Found`: Recurso não encontrado
- `422 Unprocessable Entity`: Dados inválidos

### Erro do Servidor
- `500 Internal Server Error`: Erro interno
- `502 Bad Gateway`: Erro de gateway
- `503 Service Unavailable`: Serviço indisponível

### Exemplo de Erro
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados de entrada inválidos",
    "details": [
      {
        "field": "titulo",
        "message": "O título é obrigatório"
      },
      {
        "field": "valor",
        "message": "O valor deve ser maior que zero"
      }
    ]
  },
  "timestamp": "2025-01-31T13:04:00Z"
}
```

## 💡 Exemplos de Uso

### JavaScript/Node.js

```javascript
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.advances.com.br/v1',
  headers: {
    'Authorization': `Bearer ${process.env.API_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// Buscar licitações
async function getLicitacoes(params = {}) {
  try {
    const response = await api.get('/licitacoes', { params });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar licitações:', error.response.data);
    throw error;
  }
}

// Buscar licitação específica
async function getLicitacao(id) {
  try {
    const response = await api.get(`/licitacoes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar licitação:', error.response.data);
    throw error;
  }
}

// Exemplo de uso
getLicitacoes({ status: 'ativa', limit: 10 })
  .then(data => console.log('Licitações:', data))
  .catch(error => console.error('Erro:', error));
```

### Python

```python
import requests
import os

class LicitacoesAPI:
    def __init__(self, base_url, token):
        self.base_url = base_url
        self.headers = {
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json'
        }
    
    def get_licitacoes(self, params=None):
        response = requests.get(
            f'{self.base_url}/licitacoes',
            headers=self.headers,
            params=params
        )
        response.raise_for_status()
        return response.json()
    
    def get_licitacao(self, id):
        response = requests.get(
            f'{self.base_url}/licitacoes/{id}',
            headers=self.headers
        )
        response.raise_for_status()
        return response.json()

# Exemplo de uso
api = LicitacoesAPI(
    'https://api.advances.com.br/v1',
    os.getenv('API_TOKEN')
)

try:
    licitacoes = api.get_licitacoes({'status': 'ativa', 'limit': 10})
    print('Licitações:', licitacoes)
except requests.exceptions.RequestException as e:
    print('Erro:', e)
```

### PHP

```php
<?php

class LicitacoesAPI {
    private $baseUrl;
    private $token;
    
    public function __construct($baseUrl, $token) {
        $this->baseUrl = $baseUrl;
        $this->token = $token;
    }
    
    private function makeRequest($method, $endpoint, $data = null) {
        $url = $this->baseUrl . $endpoint;
        
        $headers = [
            'Authorization: Bearer ' . $this->token,
            'Content-Type: application/json'
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
        if ($method === 'POST') {
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        }
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode >= 400) {
            throw new Exception('Erro na requisição: ' . $response);
        }
        
        return json_decode($response, true);
    }
    
    public function getLicitacoes($params = []) {
        $query = http_build_query($params);
        return $this->makeRequest('GET', '/licitacoes?' . $query);
    }
    
    public function getLicitacao($id) {
        return $this->makeRequest('GET', "/licitacoes/{$id}");
    }
}

// Exemplo de uso
$api = new LicitacoesAPI(
    'https://api.advances.com.br/v1',
    $_ENV['API_TOKEN']
);

try {
    $licitacoes = $api->getLicitacoes(['status' => 'ativa', 'limit' => 10]);
    echo json_encode($licitacoes, JSON_PRETTY_PRINT);
} catch (Exception $e) {
    echo 'Erro: ' . $e->getMessage();
}
?>
```

## ⚡ Rate Limiting

A API implementa rate limiting para garantir performance e estabilidade:

- **Limite**: 1000 requisições por hora por token
- **Headers de resposta**:
  - `X-RateLimit-Limit`: Limite total
  - `X-RateLimit-Remaining`: Requisições restantes
  - `X-RateLimit-Reset`: Timestamp de reset

### Exemplo de Headers
```http
HTTP/1.1 200 OK
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1643635200
```

### Quando o limite é excedido
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Limite de requisições excedido",
    "retry_after": 3600
  }
}
```

## 🔔 Webhooks

A API suporta webhooks para notificações em tempo real.

### Configuração de Webhook

```bash
curl -X POST \
  "https://api.advances.com.br/v1/webhooks" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://seu-site.com/webhook",
    "events": ["licitacao.created", "licitacao.updated"],
    "secret": "seu_secret_aqui"
  }'
```

### Eventos Disponíveis

- `licitacao.created`: Nova licitação criada
- `licitacao.updated`: Licitação atualizada
- `licitacao.finalizada`: Licitação finalizada
- `orgao.created`: Novo órgão criado

### Formato do Webhook

```json
{
  "event": "licitacao.created",
  "timestamp": "2025-01-31T13:04:00Z",
  "data": {
    "id": "12345",
    "numero": "001/2025",
    "titulo": "Aquisição de Equipamentos",
    "status": "ativa"
  },
  "signature": "sha256=abc123..."
}
```

### Verificação de Assinatura

```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = 'sha256=' + 
    crypto.createHmac('sha256', secret)
      .update(JSON.stringify(payload))
      .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}
```

## 📚 SDKs

### JavaScript/Node.js SDK

```bash
npm install @advances/licitacoes-api
```

```javascript
const { LicitacoesAPI } = require('@advances/licitacoes-api');

const api = new LicitacoesAPI({
  token: process.env.API_TOKEN,
  environment: 'production'
});

// Buscar licitações
const licitacoes = await api.licitacoes.list({
  status: 'ativa',
  limit: 20
});

// Buscar licitação específica
const licitacao = await api.licitacoes.get('12345');

// Criar licitação
const nova = await api.licitacoes.create({
  numero: '003/2025',
  titulo: 'Nova Licitação',
  // ... outros campos
});
```

### Python SDK

```bash
pip install advances-licitacoes-api
```

```python
from advances_licitacoes_api import LicitacoesAPI

api = LicitacoesAPI(
    token=os.getenv('API_TOKEN'),
    environment='production'
)

# Buscar licitações
licitacoes = api.licitacoes.list(status='ativa', limit=20)

# Buscar licitação específica
licitacao = api.licitacoes.get('12345')
```

## 🔧 Troubleshooting

### Problemas Comuns

#### 1. Erro 401 Unauthorized
**Causa**: Token inválido ou expirado
**Solução**: Renove o token de acesso

```bash
curl -X POST https://api.advances.com.br/oauth/token \
  -H "Content-Type: application/json" \
  -d '{
    "grant_type": "refresh_token",
    "refresh_token": "seu_refresh_token"
  }'
```

#### 2. Erro 429 Too Many Requests
**Causa**: Rate limit excedido
**Solução**: Aguarde o reset ou implemente retry com backoff

```javascript
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function makeRequestWithRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.response?.status === 429 && i < maxRetries - 1) {
        const retryAfter = error.response.headers['retry-after'] || 60;
        await delay(retryAfter * 1000);
        continue;
      }
      throw error;
    }
  }
}
```

#### 3. Erro 422 Unprocessable Entity
**Causa**: Dados de entrada inválidos
**Solução**: Verifique os campos obrigatórios e formatos

```javascript
// Validação de dados
const validateLicitacao = (data) => {
  const errors = [];
  
  if (!data.titulo) errors.push('Título é obrigatório');
  if (!data.numero) errors.push('Número é obrigatório');
  if (data.valor <= 0) errors.push('Valor deve ser maior que zero');
  
  return errors;
};
```

### Logs de Debug

```bash
# Ative logs detalhados
curl -v -X GET \
  "https://api.advances.com.br/v1/licitacoes" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Testando a API

```bash
# Teste de conectividade
curl -I https://api.advances.com.br/v1/health

# Teste de autenticação
curl -X GET \
  "https://api.advances.com.br/v1/me" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## 📞 Suporte

### Contatos

- **Email**: api@advances.com.br
- **Telefone**: (11) 99999-9999
- **Documentação**: https://docs.advances.com.br/api

### Recursos Úteis

- [Postman Collection](https://api.advances.com.br/postman)
- [Swagger Documentation](https://api.advances.com.br/swagger)
- [Status Page](https://status.advances.com.br)

### Comunidade

- [GitHub Issues](https://github.com/AdvancesSolutions/licitacoes/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/advances-api)
- [Discord](https://discord.gg/advances)

---

**Desenvolvido com ❤️ pela Advances Solutions** 