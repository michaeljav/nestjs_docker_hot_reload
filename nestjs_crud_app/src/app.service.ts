import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World modificado2!';
  }

  getGreeting(name: string): string {
    return `Hello ${name}!`;
  }
}
