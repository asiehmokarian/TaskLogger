import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    if (this.tasksService.taskCategories) {
      this.categories = this.tasksService.taskCategories;
    }
    else {
      this.getCategories();
    }
  }

  getCategories(): void {
    this.tasksService.getTaskCategories().subscribe((categories) => this.categories = categories);
  }
}
