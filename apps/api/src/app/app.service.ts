import { Injectable } from '@nestjs/common';
import { Message } from '@example-ng-jsonplaceholder/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
