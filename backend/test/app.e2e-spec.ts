import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { DataSource } from 'typeorm';

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  let dataSource: DataSource;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    dataSource = moduleFixture.get(DataSource);
    await dataSource.query('DELETE FROM "user";');  // Limpa a tabela antes dos testes
    console.log('✅ Banco limpo para os testes.');
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /users - Deve retornar status 200', async () => {
    const response = await request(app.getHttpServer()).get('/users');
    expect(response.status).toBe(200);
  });

  it('POST /users - Deve criar um usuário', async () => {
    const userDto = {
      nome: 'Usuário de Teste',
      email: 'teste@example.com',
      senha: '123456',
      role: 'user',
    };

    const response = await request(app.getHttpServer())
      .post('/users')
      .send(userDto);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe(userDto.nome);
    expect(response.body.email).toBe(userDto.email);
    expect(response.body.role).toBe(userDto.role);
  });
});