import { Injectable } from '@nestjs/common';
import { TaksStatusEnum, Task } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

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

  createTask(newTask: { title: string; description: string }): Task {
    const task = {
      id: v4(),
      title: newTask.title,
      description: newTask.description,
      status: TaksStatusEnum.IN_PROGRESS,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getTasksById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTasksById(id);

    // const newTask = {
    //   ...task,
    //   ...updatedFields,
    // };
    const newTask = Object.assign(task, updatedFields);

    this.tasks.map((task) => (task.id === id ? newTask : task));

    return newTask;
  }
}
