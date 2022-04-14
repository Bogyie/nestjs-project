import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    private emailService: EmailService
  ) {}

  async createUser(name: string, email: string, password: string): Promise<void> {
    await this.checkEmailAreadyUsed(email);

    const signupVerifyToken = uuid.v1();

    await this.registUser(name, email, password, signupVerifyToken);
    await this.sendUserRegistrationEmail(email, signupVerifyToken);
  }

  private checkEmailAreadyUsed(email: string): Promise<boolean> {
    return;
  }

  private registUser(name: string, email: string, password: string, signupVerifyToken: string): Promise<void> {
    return;
  }

  private async sendUserRegistrationEmail(email: string, signupVerifyToken: string)  {
    await this.emailService.sendUserRegistrationEmail(email, signupVerifyToken);
  }
}
