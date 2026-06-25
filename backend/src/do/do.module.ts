import { Module } from '@nestjs/common';
import { DoController } from './do.controller';
import { DoService } from './do.service';

@Module({
  controllers: [DoController],
  providers: [DoService],
})
export class DoModule {}
