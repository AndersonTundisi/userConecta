import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: configService.get<number>('DB_PORT') || 5432,
        username: configService.get<string>('DB_USERNAME') || 'userconecta',
        password: configService.get<string>('DB_PASSWORD') || 'userconecta123',
        database: configService.get<string>('DB_DATABASE') || 'userconecta_db',
        autoLoadEntities: true,
        synchronize: true, // Cuidado: só use em ambiente de desenvolvimento!
      }),
    }),
    UsersModule,
    AuthModule, // Incluindo o AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}