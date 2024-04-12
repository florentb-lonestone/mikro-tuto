import { EntityManager, EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<User[]> {
    return this.em.find(User, {});
  }

  async create(user: CreateUserDto): Promise<User> {
    const newUser = this.em.create(User, user);
    await this.em.persist(newUser).flush();
    return newUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    const user = await this.em.findOneOrFail(User, id);
    wrap(user).assign(updateUserDto);
    this.em.persist(user);
    await this.em.flush();
    return user;
  }
}
