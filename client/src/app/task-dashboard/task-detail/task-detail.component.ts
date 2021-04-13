import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task?: Task = {};
  id: string | null = null;
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private location: Location
  ) { }

  ngOnInit(): void {
    if (this.tasksService.taskCategories) {
      this.categories = this.tasksService.taskCategories
    }
    else {
      this.getCategories();
    }
    this.getTask();
  }

  getCategories(): void {
    this.tasksService.getTaskCategories().subscribe((categories) => this.categories = categories);
  }

  getTask(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null && this.id !== 'add') {
      this.tasksService.getTask(+this.id)
        .subscribe(task => this.task = task);
    }
  }

  save(): void {
    if (this.task) {
      if (this.id === 'add') {
        this.tasksService.addTask(this.task)
          .subscribe(() => this.goBack());
      }
      else {
        this.tasksService.updateTask(this.task)
          .subscribe(() => this.goBack());
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
