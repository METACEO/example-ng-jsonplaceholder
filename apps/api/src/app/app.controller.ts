import { Post } from '@example-ng-jsonplaceholder/api-interfaces';
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  getData(): Post[] {
    return this.appService.getData();
  }
}
