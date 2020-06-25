import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

const serveStaticModule = environment.production
  ? [ ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'example-ng-jsonplaceholder'),
    }) ]
  : []

@Module({
  imports: [
    ...serveStaticModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
