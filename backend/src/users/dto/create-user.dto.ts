import { IsEmail, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { UserRole } from '../user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Anderson', description: 'Nome completo do usuário' })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 'anderson@gmail.com', description: 'Email válido' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', description: 'Senha com no mínimo 6 caracteres' })
  @MinLength(6)
  senha: string;

  @ApiProperty({ enum: UserRole, description: 'Perfil de acesso do usuário' })
  @IsEnum(UserRole)
  role: UserRole;
}