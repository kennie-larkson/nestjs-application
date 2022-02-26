import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  intro(): string {
    return `This is the AuthService`;
  }
}
