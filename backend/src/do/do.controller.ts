import { Body, Controller, Post } from '@nestjs/common';
import { DoService } from './do.service';
import { CreateDoDto } from './dto/create-do.dto';

@Controller('do')
export class DoController {
  constructor(private readonly doService: DoService) {}

  @Post('create')
  createDo(@Body() createDoDto: CreateDoDto) {
    return this.doService.createDo(createDoDto);
  }
}
