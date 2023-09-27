import { Injectable } from '@nestjs/common';
import { TaksStatusEnum, Task } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  // fake DB
  private tasks: Task[] = [
    {
      id: '90',
      title: 'paint',
      description:
        'cold managed soldier giant hunter difference native by southern getting substance go heat principal snow but basket sheet sea wild official over studying none',
      status: TaksStatusEnum.OPEN,
    },
    {
      id: '89',
      title: 'adventure',
      description:
        'both police star private steel cent regular unless hospital gold full shorter fun leave earlier forty problem eleven other gave loose knowledge young say',
      status: TaksStatusEnum.IN_PROGRESS,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(newTask: { title: string; description: string }) {
    const task = {
      id: v4(),
      title: newTask.title,
      description: newTask.description,
      status: TaksStatusEnum.IN_PROGRESS,
    };

    return this.tasks.push(task);
  }

  updateTask() {}
  deleteTask() {}
}
