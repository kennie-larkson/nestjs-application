import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user/user.model';

export interface userDto {
  name: string;
  email: string;
  gender: { enum: ['male', 'female'] };
}

@Injectable()
export class UserService {
  //   constructor(private sequelize: Sequelize) {}
  constructor(@InjectModel(User) private userModel: typeof User) {}
  info(): string {
    return `This is the UserService`;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({ attributes: { exclude: ['password'] } });
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    const user = await this.userModel.findOne({ where: { id } });
    await user.destroy();
  }

  async addUser(user: userDto): Promise<User> {
    const newuser = await this.userModel.create({
      ...user,
    });
    return this.userModel.findOne({
      where: { id: newuser.id },
      attributes: { exclude: ['password'] },
    });
  }
}
