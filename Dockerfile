# Stage 1: Dependências e base
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
RUN apk add --no-cache libc6-compat

# Stage 2: Construção para produção
FROM base AS builder
WORKDIR /app
COPY . .

# Argumentos do build (podem ser definidos durante o build da imagem)
ARG VITE_API_URL
ARG VITE_BASE_URL

# Variáveis de ambiente para build
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

RUN npm run build

# Stage 3: Ambiente de produção usando nginx
FROM nginx:stable-alpine AS production
WORKDIR /usr/share/nginx/html

# Copiar os arquivos de build do Vite
COPY --from=builder /app/dist .

# Copiar configuração personalizada do nginx
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
