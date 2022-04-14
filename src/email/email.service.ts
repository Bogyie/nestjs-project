import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendUserRegistrationEmail(email: string, signupVerifyToken: string) {

  }
}
