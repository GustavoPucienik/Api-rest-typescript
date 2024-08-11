# API CRUD de Produtos
Esta API RESTful permite a criação, leitura, atualização e exclusão (CRUD) de produtos. Foi construída utilizando TypeScript, Express e TypeORM, com validação de dados através do Yup.

## Tecnologias utilizadas
- **node**: Ambiente de execução javascript.
- **typescript**: Linguagem de programação.

## Principais bibliotecas
- **Express**: Framework web rápido, flexível e minimalista para criação de APIs em Node.js.
- **express-async-errors**: Middleware para tratamento de erros assíncronos no Express.
- **typeorm**: ORM para TypeScript e JavaScript que facilita a interação com bancos de dados.
- **sqlite3**: Driver para conectar e operar com bancos de dados SQLite.
- **yup**: Biblioteca de validação e esquema de dados para JavaScript.
- **yup-locale-pt**: Extensão do Yup para suporte à localização em português.
- **reflect-metadata**: Biblioteca que adiciona suporte a metadados refletivos para TypeScript.
- **tsc-watch**: Ferramenta para executar e monitorar a compilação TypeScript em tempo real.
- **@types/express**: Tipagens para o Express.
- **@types/node**: Tipagens para o Node.js.

## Estrutura do Projeto
- **build/**: Diretório de saída para os arquivos transpilados.
- **node_modules/**: Diretório contendo as dependências do projeto.
- **package.json**: Arquivo de configuração do projeto, contendo scripts, dependências e outras informações.
- **package-lock.json**: Arquivo gerado automaticamente para manter as versões das dependências bloqueadas.
- **server.ts**: Ponto de entrada principal do servidor.
- **src/**: Diretório principal contendo o código fonte do projeto:
  - **Enum/**: Enums usados no projeto.
  - **app.ts**: Configuração principal da aplicação e inicialização do servidor.
  - **config/**: Configurações diversas, como a conexão com o banco de dados.
  - **controller/**: Controladores que lidam com as requisições e lógica de negócios.
  - **entities/**: Definições das entidades utilizadas pelo TypeORM.
  - **middleware/**: Middlewares que interceptam as requisições para validação e manipulação.
  - **repositories/**: Classes responsáveis pela interação com o banco de dados usando o TypeORM.
  - **routes/**: Definições das rotas da API, associando rotas aos controladores.
  - **tipos/**: Definições de tipos e interfaces TypeScript.
  - **utils/**: Funções utilitárias usadas em várias partes do projeto.
- **tsconfig.json**: Configurações do TypeScript.

## Rodar a api localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/api-crud-produto.git
2. Navegue até o diretório do projeto:
   ```bash
   cd api-crud-produto
3. Instale as dependências:
   ```bash
   npm install
4. Rodar a api:
   ```bash
   npm start