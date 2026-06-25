import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoModule } from './do/do.module';

@Module({
  imports: [DoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
