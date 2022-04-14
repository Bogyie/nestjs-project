import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(readonly userService: UsersService) { }

  @Post('')
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.userService.createUser(name, email, password);
  }

  @Post('email-verify')
  async verifyEmail(@Body() dto: VerifyEmailDto): Promise<void> {
    console.log(dto);    
  }

  @Post('login')
  async loginUser(@Body() dto: LoginUserDto): Promise<void> {
    console.log(dto);
  }

  @Get(':userId')
  async getUserInfoById(@Param('userId') userId: string): Promise<void> {
    console.log(userId);
  }
}
