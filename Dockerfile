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

# Argumentos do build
ARG VITE_API_URL
ARG VITE_BASE_URL

# Variáveis de ambiente para build
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

RUN npm run build

# Stage 3: Ambiente de produção
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV production

# Argumentos do build para produção
ARG VITE_API_URL
ARG VITE_BASE_URL

# Variáveis de ambiente para produção
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

# Copiar apenas arquivos necessários
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Instalar serve para servir arquivos estáticos (equivalente ao Next.js start)
RUN npm install -g serve@14.2.1

# Usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
