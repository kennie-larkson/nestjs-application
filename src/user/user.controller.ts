import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.model';
import { userDto, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('info')
  getInfo(): string {
    return this.userService.info();
  }

  @Get('users')
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('user')
  getUser(id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get('user')
  deleteUser(id: string): Promise<void> {
    return this.userService.remove(id);
  }

  @Post()
  async addUser(@Body() createUserDto: userDto): Promise<User> {
    return this.userService.addUser(createUserDto);
  }
}
