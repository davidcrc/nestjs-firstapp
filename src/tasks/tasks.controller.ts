import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  hello() {
    return 'Hello world';
  }
}
