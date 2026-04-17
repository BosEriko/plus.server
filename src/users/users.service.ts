import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserModel } from '../../prisma/generated/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserModel> {
    return this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
      },
    });
  }

  async findAll(): Promise<UserModel[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserModel> {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<UserModel> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
