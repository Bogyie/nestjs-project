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
    const { signupVerifyToken } = dto
    await this.userService.verifyEmail(signupVerifyToken)
  }

  @Post('login')
  async loginUser(@Body() dto: LoginUserDto): Promise<void> {
    const {email, password} = dto;
    await this.userService.loginUser(email, password);
  }

  @Get(':userId')
  async getUserInfoById(@Param('userId') userId: string): Promise<void> {
    await this.userService.getUserInfoById(+userId);
  }
}
