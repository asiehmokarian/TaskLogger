import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './models/category.model';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [],
      categories: Category[] = [],
      today = new Date(),
      nextSevenDay = this.addDays(today, 7)

    let dateVar = this.addDays(today, -4);

    for (let i = 0; i < 15; i++) {
      tasks.push({
        id: i,
        title: `Task ${i}`,
        deadline: new Date(dateVar),
        categoryId: i % 4,
        description: `Task ${i} description`,
        reminder: this.addDays(dateVar, -1)
      })
      dateVar = this.addDays(dateVar, 1);
    }

    const upcomingTasks: Task[] = tasks.filter(t => t.deadline!.getDate() <= nextSevenDay.getDate() && t.deadline!.getDate() > today.getDate());

    for (let i = 0; i < 4; i++) {
      categories.push({
        id: i,
        name: `Category ${i}`
      })
    }
    return { tasks, upcomingTasks, categories };
  }

  private addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
