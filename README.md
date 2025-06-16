# 🧑‍💻 userConecta

Sistema Fullstack para Gerenciamento de Usuários  
**Backend:** NestJS + PostgreSQL + TypeORM  
**Frontend:** ReactJS + TypeScript  
**Deploy:** Railway (Backend) e Vercel/Netlify (Frontend)

## 📌 Descrição do Projeto

O **userConecta** é uma aplicação web projetada para gerenciar usuários de forma segura, escalável e com uma interface amigável.

### Principais Funcionalidades:

- Cadastro de novos usuários
- Login seguro com JWT
- Listagem, edição e exclusão de usuários (somente admin)
- Visualização de perfil para usuários comuns
- Filtros e ordenação por papel ou data
- Listagem de usuários inativos (sem login nos últimos 30 dias)


## 🚀 Tecnologias Utilizadas

### Backend:
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- JWT + Bcrypt
- Swagger (Documentação)

### Frontend:
- ReactJS
- TypeScript
- React Router
- Context API (ou Redux)
- Styled Components ou TailwindCSS
- Axios / Fetch API


## 🐳 Docker (Banco de Dados Local)

Utilizamos Docker para o banco PostgreSQL local.

### Como subir o banco localmente:

docker-compose up -d
⚙️ Configuração Local

## Backend:
Instalar as dependências:

cd backend
npm install
Criar um arquivo .env na raiz do backend:

env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=userconecta
DB_PASSWORD=userconecta123
DB_DATABASE=userconectadb
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=3600s

Rodar a aplicação:

npm run start:dev

## Frontend:
Instalar as dependências:

cd frontend
npm install

Rodar a aplicação:

npm run dev
🧪 Testes
O backend terá testes unitários com Jest.

npm run test


📄 Documentação da API
A documentação interativa estará disponível após subir o backend:

http://localhost:3000/api


☁️ Deploy
Parte	Plataforma	Status
Backend (NestJS)	Railway	🚧 Em desenvolvimento
Frontend (React)	Vercel / Netlify	🚧 Em desenvolvimento

📋 Entregáveis
✅ Código Fonte (GitHub)

✅ README.md com instruções

✅ Documentação da API (Swagger)

✅ Explicação de design/arquitetura (em breve)

✅ Deploy online (opcional, caso o tempo permita)

✅ Status Atual do Projeto:
📅 Início: Junho/2025
🏗️ Fase atual: Estruturação de Backend com NestJS e PostgreSQL via Docker
🎯 Próxima etapa: Desenvolvimento dos módulos Auth e Users.

🤝 Contribuidores
Anderson Tundisi