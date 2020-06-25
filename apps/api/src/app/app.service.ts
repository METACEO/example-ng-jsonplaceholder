import { Injectable } from '@nestjs/common';
import { Post } from '@example-ng-jsonplaceholder/api-interfaces';

@Injectable()
export class AppService {
  getData(): Post[] {
    return [
      {
        body: 'From the api app!',
        id: 'id',
        title: 'Just one post!',
        userId: 'userId'
      }
    ];
  }
}
