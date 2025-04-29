import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //http://localhost:3000
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //http://localhost:3000/greet?name=querySent
  @Get('greet')
  getGreetingByQuery(@Query('name') name: string): string {
    console.log('query modified');
    return this.appService.getGreeting(name);
  }

  //http://localhost:3000/greet/parameterAdded
  @Get('greet/:name')
  getGreetingByParam(@Param('name') name: string): string {
    console.log('enterd greeting method');
    return this.appService.getGreeting(name);
  }
}
