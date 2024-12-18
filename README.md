# Teste Atendly

Bem-vindo ao projeto **Teste Atendly**, uma aplicação simples de autenticação e gerenciamento de perfil construída com Vue 3 e Node.js.

## Estrutura do Projeto

teste-atendly/
  ├── backend/
  ├── frontend/ 
  └── README.md

  
## Pré-requisitos

- Docker instalado.
- Node.js (versão 18 ou superior) e npm instalados.

## Iniciando o Projeto

1. **Configuração do Banco de Dados**  
   Execute o comando abaixo para iniciar o container MySQL:
   ```bash
   docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql:8.0.34

2. **Criar o arquivo .env em teste-atendly/backend**
    ```bash
    SECRET_KEY="enviada-no-whatsapp"
    ```


## Acessando o Sistema
-  Frontend: http://localhost:5173/
-  Backend: http://localhost:3001/api/

## Tecnologias Utilizadas
### Frontend:
- Vue 3,
- Vue Router,
- Pinia
### Backend:
- Node.js,
- Express,
- Sequelize
### Banco de Dados:
- MySQL em container Docker
### Autenticação:
- JWT

## Scripts Disponíveis
```bash
    npm run start: Instala as dependências e inicia os servidores.
    npm run dev: Inicia o backend ou frontend, dependendo do diretório.
```

## Endpoints
### Backend
- **POST /api/register**: Cadastro de usuário.
- **POST /api/login**: Autenticação de usuário.
- **GET /api/profile**: Retorna o perfil do usuário autenticado.
### Frontend
- **POST /register**: Cadastro de usuário.
- **POST /login**: Autenticação de usuário.
- **GET /profile**: Retorna o perfil do usuário autenticado.