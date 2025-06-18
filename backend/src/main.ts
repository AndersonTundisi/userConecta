import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });

  app.enableCors();

  // Swagger Config
  const config = new DocumentBuilder()
    .setTitle('UserConecta API')
    .setDescription('API para gerenciamento de usuários no sistema UserConecta')
    .setVersion('1.0')
    .addTag('Users')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Salvar JSON da documentação Swagger
  writeFileSync(
    join(process.cwd(), 'swagger.json'),
    JSON.stringify(document, null, 2),
  );

  // Swagger UI em: http://localhost:3000/api-docs
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();