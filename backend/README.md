# 📡 UserConecta - Backend API

Este é o **backend** da aplicação **UserConecta**, desenvolvido com **NestJS**. O projeto fornece uma API RESTful para **gerenciamento de usuários**, com recursos de **autenticação JWT**, **CRUD**, e **documentação Swagger**.

---

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** – Framework Node.js para aplicações escaláveis
- **[TypeORM](https://typeorm.io/)** – ORM para banco de dados relacional
- **[PostgreSQL](https://www.postgresql.org/)** – Banco de dados utilizado
- **[Swagger / OpenAPI](https://swagger.io/)** – Documentação automática da API
- **[Jest](https://jestjs.io/)** – Testes unitários e de integração
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** – Padrões e formatação de código

---

## 🗂️ Estrutura de Pastas

backend/
├── src/
│ ├── auth/ # Autenticação e estratégias de login
│ ├── users/ # Módulo de usuários (controllers, services, dtos, entity)
│ ├── app.controller.ts
│ ├── app.module.ts
│ ├── app.service.ts
│ └── main.ts
├── test/ # Testes de integração e2e
├── dist/ # Build gerado após compilação
├── package.json
├── tsconfig.json
├── swagger.json # Arquivo JSON exportado da documentação Swagger
└── README.md

## ✅ Funcionalidades da API

- ✔️ Cadastro de usuários  
- ✔️ Login com autenticação JWT  
- ✔️ Operações CRUD de usuários  
- ✔️ Validação de dados (DTOs com Pipes)  
- ✔️ Documentação automática via Swagger  
- ✔️ Testes unitários e de integração  

## 📋 Como Executar o Projeto

### 1. Clonar o repositório

git clone https://github.com/AndersonTundisi/userConecta.git
cd backend

2. Instalar as dependências
npm install

3. Configurar o banco de dados PostgreSQL
Crie um arquivo .env.development na raiz do projeto:

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=userconecta
DB_PASSWORD=userconecta123
DB_DATABASE=userconecta_db

📝 O projeto usa configuração baseada no ambiente:
Arquivo de exemplo: .env

4. Rodar as migrações (se houver)
Se no futuro você adicionar migrations com TypeORM:
npm run typeorm migration:run

5. Executar a aplicação (modo desenvolvimento)
npm run start:dev

🌐 Documentação Swagger
Após iniciar o projeto, acesse no navegador:
http://localhost:3000/api-docs
O projeto também exporta o JSON da documentação em:
swagger.json na raiz.

🧪 Rodando os Testes
Testes Unitários:
npm run test

Testes End-to-End (E2E):
npm run test:e2e

✅ Build para Produção
npm run build
npm run start
🚧 Melhorias Futuras (Roadmap)
🔐 Autenticação OAuth2

🚀 Deploy em serviços como Railway, Render, Vercel, etc

🔄 CI/CD com GitHub Actions

🌱 Integração com Frontend (React)

📈 Monitoramento e Logs centralizados

👨‍💻 Autor
Anderson Tundisi
Engenharia de Software | Full Stack Developer | UX/UI Designer

LinkedIn | GitHub