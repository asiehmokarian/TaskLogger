import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  categoryId?: number | null = null;
  upcomingTasks: Task[] = [];

  constructor(private taskService: TasksService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    const categoryId = this.route.snapshot.paramMap.get('id');
    if (categoryId) {
      this.categoryId = +categoryId;
      this.taskService.getTaskByCategory(+categoryId).subscribe(tasks => { this.tasks = tasks });
    }
    else {
      this.taskService.getTasks().subscribe(tasks => { this.tasks = tasks });
    }

    this.taskService.getUpComingTasks().subscribe(tasks => this.upcomingTasks = tasks);
  }
}
