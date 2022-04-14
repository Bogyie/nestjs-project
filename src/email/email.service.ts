import { Injectable } from '@nestjs/common';
import Mail = require('nodemailer/lib/mailer')
import * as nodemailer from 'nodemailer';


interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: '',
      auth: {
        user: '',
        pass: ''
      }
    });
  }

  async sendUserRegistrationEmail(email: string, signupVerifyToken: string) {

  }
}
