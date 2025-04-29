import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World modificado23!';
  }

  getGreeting(name: string): string {
    return `Hello 3 ${name}!`;
  }
}
