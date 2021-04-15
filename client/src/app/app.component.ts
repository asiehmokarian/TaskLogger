import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { Task } from './models/task.model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  sidebarMenuCollapsed = true;
  categories: Category[] = [];
  upcomingTasks: Task[] = [];
  data: any[] = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.initDate();
  }

  initDate(): void {
    if (this.tasksService.taskCategories) {
      this.categories = this.tasksService.taskCategories;
      this.getUpcommingTasks();
    }
    else {
      this.getCategories();
    }
  }

  getCategories(): void {
    this.tasksService.getTaskCategories().subscribe(categories => this.categories = categories, undefined, () => this.getUpcommingTasks());
  }

  getUpcommingTasks(): void {
    this.tasksService.getUpComingTasks().subscribe(tasks => this.upcomingTasks = tasks, undefined, () => this.setChartSource());
  }

  setChartSource(): void {
    for (const cat of this.categories) {
      this.data.push(
        { name: cat.name, value: this.getCategoryUpcomingTasksCount(cat.id) }
      );
    }
  }

  getCategoryUpcomingTasksCount(id: number) {
    return this.upcomingTasks.filter(t => t.categoryId === id).length;
  }
}
