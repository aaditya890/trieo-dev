import { Injectable } from '@nestjs/common';
import { CreateDoDto } from './dto/create-do.dto';

@Injectable()
export class DoService {
  createDo(body: CreateDoDto) {
    return {
      message: 'Do created successfully',
      data: body,
    };
  }
}
