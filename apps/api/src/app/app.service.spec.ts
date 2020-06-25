import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return a single post', () => {
      expect(service.getData()).toEqual([
        {
          body: 'From the api app!',
          id: 'id',
          title: 'Just one post!',
          userId: 'userId'
        }
      ]);
    });
  });
});
