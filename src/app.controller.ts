import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req:Request): string {
    console.log(req.headers)
    return this.appService.getHello();
  }
}
