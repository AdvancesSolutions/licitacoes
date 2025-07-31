# 🚀 Guia de Deploy

Este guia contém instruções detalhadas para fazer o deploy do **Sistema de Licitações Vances** em diferentes ambientes.

## 📋 Índice

- [Pré-requisitos](#pré-requisitos)
- [Build de Produção](#build-de-produção)
- [Deploy Local](#deploy-local)
- [Deploy em Servidor](#deploy-em-servidor)
- [Deploy na Nuvem](#deploy-na-nuvem)
- [Configuração de Domínio](#configuração-de-domínio)
- [SSL/HTTPS](#sslhttps)
- [Monitoramento](#monitoramento)
- [Backup](#backup)
- [Troubleshooting](#troubleshooting)

## 🔧 Pré-requisitos

### Servidor
- **Node.js** 16+ (para build)
- **Servidor Web** (Apache, Nginx, ou similar)
- **SSL Certificate** (recomendado)
- **Domínio** configurado

### Variáveis de Ambiente
```bash
# .env.production
VUE_APP_API_BASE_URL=https://api.seudominio.com
VUE_APP_TITLE=Sistema de Licitações
NODE_ENV=production
```

## 🏗️ Build de Produção

### 1. Preparação do Projeto

```bash
# Clone o repositório
git clone https://github.com/AdvancesSolutions/licitacoes.git
cd licitacoes

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.production
```

### 2. Configuração das Variáveis

Edite o arquivo `.env.production`:

```env
# API Configuration
VUE_APP_API_BASE_URL=https://api.seudominio.com
VUE_APP_API_TIMEOUT=30000

# Application Configuration
VUE_APP_TITLE=Sistema de Licitações Vances
VUE_APP_VERSION=1.0.0

# Environment
NODE_ENV=production

# Build Configuration
VUE_APP_PUBLIC_PATH=/
```

### 3. Build da Aplicação

```bash
# Build para produção
npm run build

# Verifique se a pasta dist/ foi criada
ls -la dist/
```

### 4. Otimizações de Build

```javascript
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          }
        }
      }
    }
  },
  
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimize(true)
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  }
}
```

## 🏠 Deploy Local

### Usando Servidor Local

```bash
# Instale um servidor local
npm install -g serve

# Sirva os arquivos de produção
serve -s dist -l 8080

# Acesse: http://localhost:8080
```

### Usando Docker

```dockerfile
# Dockerfile
FROM nginx:alpine

# Copie os arquivos de build
COPY dist/ /usr/share/nginx/html/

# Copie a configuração do nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80
EXPOSE 80

# Inicie o nginx
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build da imagem
docker build -t licitacoes-app .

# Execute o container
docker run -p 8080:80 licitacoes-app
```

## 🌐 Deploy em Servidor

### Apache

#### 1. Configuração do Virtual Host

```apache
# /etc/apache2/sites-available/licitacoes.conf
<VirtualHost *:80>
    ServerName licitacoes.seudominio.com
    DocumentRoot /var/www/licitacoes
    
    <Directory /var/www/licitacoes>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/licitacoes_error.log
    CustomLog ${APACHE_LOG_DIR}/licitacoes_access.log combined
</VirtualHost>
```

#### 2. Arquivo .htaccess

```apache
# /var/www/licitacoes/.htaccess
RewriteEngine On
RewriteBase /

# Handle Angular routes
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

#### 3. Deploy Script

```bash
#!/bin/bash
# deploy.sh

echo "🚀 Iniciando deploy..."

# Backup da versão atual
if [ -d "/var/www/licitacoes" ]; then
    cp -r /var/www/licitacoes /var/www/licitacoes.backup.$(date +%Y%m%d_%H%M%S)
fi

# Build da aplicação
npm run build

# Copie os arquivos para o servidor
sudo cp -r dist/* /var/www/licitacoes/

# Configure permissões
sudo chown -R www-data:www-data /var/www/licitacoes
sudo chmod -R 755 /var/www/licitacoes

# Reinicie o Apache
sudo systemctl reload apache2

echo "✅ Deploy concluído!"
```

### Nginx

#### 1. Configuração do Servidor

```nginx
# /etc/nginx/sites-available/licitacoes
server {
    listen 80;
    server_name licitacoes.seudominio.com;
    root /var/www/licitacoes;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Handle Vue Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Error pages
    error_page 404 /index.html;
}
```

#### 2. Ativação do Site

```bash
# Crie um link simbólico
sudo ln -s /etc/nginx/sites-available/licitacoes /etc/nginx/sites-enabled/

# Teste a configuração
sudo nginx -t

# Recarregue o nginx
sudo systemctl reload nginx
```

## ☁️ Deploy na Nuvem

### AWS S3 + CloudFront

#### 1. Configuração do S3

```bash
# Instale o AWS CLI
aws configure

# Crie um bucket
aws s3 mb s3://licitacoes-app

# Configure o bucket para website
aws s3 website s3://licitacoes-app --index-document index.html --error-document index.html
```

#### 2. Upload dos Arquivos

```bash
# Upload dos arquivos
aws s3 sync dist/ s3://licitacoes-app --delete

# Configure CORS
aws s3api put-bucket-cors --bucket licitacoes-app --cors-configuration file://cors.json
```

#### 3. CloudFront Distribution

```json
{
  "CallerReference": "licitacoes-app",
  "Comment": "Sistema de Licitações",
  "DefaultRootObject": "index.html",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-licitacoes-app",
        "DomainName": "licitacoes-app.s3.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-licitacoes-app",
    "ViewerProtocolPolicy": "redirect-to-https",
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "MinTTL": 0,
    "Compress": true
  }
}
```

### Vercel

#### 1. Configuração do Vercel

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

#### 2. Deploy

```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

#### 1. Configuração do Netlify

```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 2. Deploy

```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

## 🌍 Configuração de Domínio

### DNS Configuration

```bash
# Exemplo de configuração DNS
# A Record
licitacoes.seudominio.com.  A   192.168.1.100

# CNAME Record (se usando CDN)
www.licitacoes.seudominio.com.  CNAME  licitacoes.seudominio.com.
```

### Verificação de DNS

```bash
# Verifique se o DNS está propagado
nslookup licitacoes.seudominio.com
dig licitacoes.seudominio.com
```

## 🔒 SSL/HTTPS

### Let's Encrypt (Gratuito)

```bash
# Instale o Certbot
sudo apt install certbot python3-certbot-apache

# Obtenha o certificado
sudo certbot --apache -d licitacoes.seudominio.com

# Renovação automática
sudo crontab -e
# Adicione: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Configuração Manual

```nginx
# /etc/nginx/sites-available/licitacoes-ssl
server {
    listen 443 ssl http2;
    server_name licitacoes.seudominio.com;
    
    ssl_certificate /etc/ssl/certs/licitacoes.crt;
    ssl_certificate_key /etc/ssl/private/licitacoes.key;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    # ... resto da configuração
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name licitacoes.seudominio.com;
    return 301 https://$server_name$request_uri;
}
```

## 📊 Monitoramento

### Logs

```bash
# Apache logs
tail -f /var/log/apache2/licitacoes_access.log
tail -f /var/log/apache2/licitacoes_error.log

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Health Check

```bash
#!/bin/bash
# health-check.sh

URL="https://licitacoes.seudominio.com"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" $URL)

if [ $RESPONSE -eq 200 ]; then
    echo "✅ Aplicação está funcionando"
else
    echo "❌ Aplicação com problemas (HTTP $RESPONSE)"
    # Enviar notificação
fi
```

### Monitoramento com Uptime Robot

1. Acesse [Uptime Robot](https://uptimerobot.com/)
2. Crie uma nova monitor
3. Configure:
   - **URL**: https://licitacoes.seudominio.com
   - **Type**: HTTP(s)
   - **Interval**: 5 minutes
   - **Alert**: Email/SMS

## 💾 Backup

### Script de Backup

```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backup/licitacoes"
SOURCE_DIR="/var/www/licitacoes"

# Crie o diretório de backup se não existir
mkdir -p $BACKUP_DIR

# Faça o backup
tar -czf $BACKUP_DIR/licitacoes_$DATE.tar.gz $SOURCE_DIR

# Remova backups antigos (mantenha últimos 7 dias)
find $BACKUP_DIR -name "licitacoes_*.tar.gz" -mtime +7 -delete

echo "Backup criado: licitacoes_$DATE.tar.gz"
```

### Backup Automático

```bash
# Adicione ao crontab
crontab -e

# Backup diário às 2h da manhã
0 2 * * * /path/to/backup.sh
```

## 🔧 Troubleshooting

### Problemas Comuns

#### 1. Erro 404 em Rotas

**Sintoma**: Página não encontrada ao acessar rotas diretas
**Solução**: Configure o servidor para redirecionar para index.html

```apache
# Apache
RewriteEngine On
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

```nginx
# Nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

#### 2. Problemas de CORS

**Sintoma**: Erro de CORS no console
**Solução**: Configure o servidor para permitir CORS

```apache
# Apache
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type, Authorization"
```

#### 3. Problemas de Performance

**Sintoma**: Aplicação lenta
**Soluções**:

```nginx
# Nginx - Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

#### 4. Problemas de SSL

**Sintoma**: Certificado inválido ou expirado
**Solução**: Renove o certificado

```bash
# Let's Encrypt
sudo certbot renew

# Verifique a validade
openssl x509 -in /etc/letsencrypt/live/seudominio.com/fullchain.pem -text -noout | grep "Not After"
```

### Logs de Debug

```bash
# Verifique os logs em tempo real
tail -f /var/log/apache2/licitacoes_error.log

# Verifique o status do serviço
sudo systemctl status apache2
sudo systemctl status nginx

# Verifique as portas em uso
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443
```

## 📞 Suporte

### Contatos

- **Email**: suporte@advances.com.br
- **Telefone**: (11) 99999-9999
- **Documentação**: https://github.com/AdvancesSolutions/licitacoes

### Recursos Úteis

- [Vue.js Deployment Guide](https://vuejs.org/guide/best-practices/production-deployment.html)
- [Apache Documentation](https://httpd.apache.org/docs/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)

---

**Desenvolvido com ❤️ pela Advances Solutions** 