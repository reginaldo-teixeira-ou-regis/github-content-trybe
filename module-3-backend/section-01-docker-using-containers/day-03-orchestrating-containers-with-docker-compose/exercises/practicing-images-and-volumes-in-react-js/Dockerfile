# Use a imagem do node como base
FROM node:16

# Definir o diretório de trabalho para /app
WORKDIR /app

# Copiar o arquivo package.json para o diretório de trabalho
COPY package.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos restantes para o diretório de trabalho
COPY . ./

EXPOSE 8080

# Executar o script "start" do arquivo package.json
CMD ["npm", "start"]