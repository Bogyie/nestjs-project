import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async createUser(name: string, email: string, password: string): Promise<void> {
    
  }

  async verifyEmail(token: string): Promise<void> {
    
  }
}
