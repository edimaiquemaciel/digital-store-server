# Imagem base do Node
FROM node:22-alpine

# Criar diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o restante
COPY . .

# Expor a porta 8080 (necessária para Fly.io)
EXPOSE 8080

# Comando para rodar o server.js
CMD ["node", "server.js"]
