import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User, UserRole } from './user.entity';
import { Repository, ObjectLiteral } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

type MockRepository<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRepository = <T extends ObjectLiteral = any>(): MockRepository<T> => ({
  find: jest.fn(),
  findOneBy: jest.fn(),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  create: jest.fn(),
});

describe('UsersService', () => {
  let service: UsersService;
  let repo: MockRepository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and return a user', async () => {
      const createUserDto: CreateUserDto = {
        nome: 'Anderson',
        email: 'anderson@example.com',
        senha: '123456',
        role: UserRole.USER,
      };

      const savedUser = { id: 1, ...createUserDto };

      repo.create!.mockReturnValue(createUserDto);
      repo.save!.mockResolvedValue(savedUser);

      const result = await service.create(createUserDto);

      expect(result).toEqual(savedUser);
      expect(repo.create).toHaveBeenCalledWith(createUserDto);
      expect(repo.save).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = [{ id: 1, nome: 'Anderson' }];
      repo.find!.mockResolvedValue(users);

      expect(await service.findAll()).toEqual(users);
      expect(repo.find).toHaveBeenCalled();
    });
  });

 describe('findOne', () => {
  it('should return a user by id', async () => {
    const user = { id: 1, nome: 'Anderson' };
    repo.findOneBy!.mockResolvedValue(user);

    expect(await service.findOne(1)).toEqual(user);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });

  it('should throw an error if user not found', async () => {
    repo.findOneBy!.mockResolvedValue(null);

    await expect(service.findOne(99)).rejects.toThrow(/Usuário.*não encontrado/);
    expect(repo.findOneBy).toHaveBeenCalledWith({ id: 99 });
  });
});

  describe('update', () => {
    it('should update and return the updated user', async () => {
      const updateDto: UpdateUserDto = { nome: 'Novo Nome' };

      repo.update!.mockResolvedValue({ affected: 1 });
      repo.findOneBy!.mockResolvedValue({ id: 1, ...updateDto });

      const result = await service.update(1, updateDto);

      expect(repo.update).toHaveBeenCalledWith(1, updateDto);
      expect(result).toEqual({ id: 1, ...updateDto });
    });
  });

  describe('remove', () => {
  it('should delete a user successfully', async () => {
    repo.delete!.mockResolvedValue({ affected: 1 });

    await expect(service.remove(1)).resolves.toBeUndefined();
    expect(repo.delete).toHaveBeenCalledWith(1);
  });

  it('should throw an error if no user was deleted', async () => {
    repo.delete!.mockResolvedValue({ affected: 0 });

    await expect(service.remove(99)).rejects.toThrow('Usuário com id 99 não encontrado para remover');
    expect(repo.delete).toHaveBeenCalledWith(99);
  });
});
})