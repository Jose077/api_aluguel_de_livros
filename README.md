Teste Back-End Nodejs

Dependencias:

    - Postman (Acesso a documentação de rotas);

    - É necessário criar um banco com a configuração abaixo, ou alterar as credencias no arquivo ./ormconfig.json
    
    - CONFIGURAÇÃO DO DB
    É necessário criar um banco com a configuração abaixo, ou alterar as credencias no arquivo ./ormconfig.json
        /* db: {
            "type": "postgres",
            "port": 5432,
            "host": "localhost", 
            "username": "postgres",
            "password": "postgres",
            "database": "loja_livros", 
        } */
    - Crie um banco de dados com o nome loja_livros

    Na raiz projeto execute(com yarn ou npm):

        //Instala dependências
        $ yarn install

        //Executa migrations para criacao das tabelas no db
        $ yarn typeorm migration:run

        //Cria usuario
        $ yarn seed:user
            /*{
                email: "user@email.com.br",
                password: "user123"
            }*.
            
        //inicie o projeto
        $ yarn dev
        
        
        //Execute o projeto
        $ yarn dev

        //importe as rotas documentadas com o Postman
        - Na aba colections clique em importar, e 
        em seguida adicione ou arreste o arquivo Api_book_rental_docspostman_collection.json localizado na raiz do projeto.

        - Para testar a api, gere um token no item auth user, que contem a rota http://localhost:3333/users/session

        
-- REQUISITOS --

Funcionalidades:

1) Login
 - Endpoint para login
 - Não deve ser possível acessar os outros endpoints sem realizar o login

2) Lista de livros
 - Endpoint para exibir uma lista com todos os livros cadastrados, com opção para pesquisa
 - Endpoint para exibir detalhes de um livro
 - Endpoint para permitir alugar um livro
 - Não permitir alugar um livro já alugado

3) CRUD de livros
 - Endpoint para cadastro, edição e remoção de livros
 - Não deve ser possível editar e remover livros que estão alugados

Premissas:
- Usar base de dados postgresql
- Uso de algum Lint
- Usar repositório público (Bitbucket, Github).
- Presença de testes unitários.

Diferencial:
- Uso de docker 

Critérios de Avaliação:
- Estruturação do código
- Validação das regras de negócio
- Presença de testes unitários.
- API REST e Design Patterns
- Uso de GIT
- Prazo de 3 dias após o envio desta especificação.

Importante: caso não consiga finalizar completamente o app dentro do prazo estipulado, não deixe de enviar seu código para nossa avaliação, e comunique o que você desenvolveu e o que ficou faltando.
