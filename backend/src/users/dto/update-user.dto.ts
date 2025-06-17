import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: 'Novo Nome', description: 'Nome atualizado' })
  @IsOptional()
  nome?: string;

  @ApiPropertyOptional({ example: 'novoemail@email.com', description: 'Email atualizado' })
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: 'novaSenha123', description: 'Nova senha' })
  @IsOptional()
  senha?: string;
}