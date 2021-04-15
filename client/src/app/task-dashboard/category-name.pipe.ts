import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category.model';
import { TasksService } from '../services/tasks.service';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {
  private categories: Category[] = [];

  constructor(private tasksService: TasksService) {
    if (this.tasksService.taskCategories) {
      this.categories = this.tasksService.taskCategories;
    }
    else {
      this.getCategories();
    }
  }

  transform(value: number): string | undefined {
    return this.categories.find(c => c.id === value)?.name;
  }

  getCategories(): void {
    this.tasksService.getTaskCategories().subscribe((categories) => this.categories = categories);
  }
}
