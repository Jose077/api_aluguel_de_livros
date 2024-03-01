# Estágio de Construção
FROM node:14-alpine AS builder
# Define o diretório de trabalho para o estágio de construção
WORKDIR /app
# Copia o arquivo package.json para o diretório de trabalho
COPY ./package.json ./
# Instala as dependências do Node.js
RUN npm install
# Copia todo o código-fonte para o diretório de trabalho
COPY . .
# Executa o comando npm run build para construir o aplicativo
RUN npm run build

# Estágio de Execução
FROM node:14-alpine
# Define o diretório de trabalho para o estágio de execução
WORKDIR /app
# Copia o conteúdo do estágio de construção para o diretório de trabalho
COPY --from=builder /app ./
# Informa que o aplicativo estará ouvindo na porta 3333 (não afeta o roteamento de portas)
EXPOSE 3333
# Define a variável de ambiente TZ como "America/Fortaleza"
ENV TZ=America/Fortaleza
# Configura o fuso horário do contêiner
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# Define o comando padrão a ser executado quando o contêiner for iniciado
CMD ["npm", "run", "prod"]
