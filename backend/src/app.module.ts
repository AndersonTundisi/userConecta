import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Carrega o .env
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Configuração do TypeORM com PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST!,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USERNAME!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_DATABASE!,
      autoLoadEntities: true,
      synchronize: true,
    }),

    // Aqui futuramente você vai importar os módulos como AuthModule, UsersModule, etc.
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}