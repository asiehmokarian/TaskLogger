import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../models/category.model';
import { Task } from '../../models/task.model';
import { NotificationService } from '../notification.service';
import { TasksService } from "../tasks.service"

@Injectable({
  providedIn: 'root'
})
export class TasksServiceMock extends TasksService {

  private mockTasks: Task[] = [];
  private mockUpComingTasks: Task[] = [];
  private mockTask: Task = {};
  private mockCategories: Category[] = [];

  taskCategories: Category[] | null = null;
  constructor() {
    super(null as unknown as HttpClient, new NotificationService());
    this.initMockData();
  }

  getTasks(): Observable<Task[]> {
    return of(this.mockTasks);
  }

  getTask(id: number): Observable<Task> {
    this.mockTask.id = id;
    return of(this.mockTask);
  }

  getUpComingTasks(): Observable<Task[]> {
    return of(this.mockUpComingTasks);
  }

  updateTask(task: Task): Observable<any> {
    this.mockTask = task;
    return of();
  }

  addTask(task: Task): Observable<Task> {
    task.id = 3;
    return of(task);
  }

  getTaskCategories(): Observable<Category[]> {
    return of(this.mockCategories);
  }

  getTaskByCategory(categoryId: number): Observable<Task[]> {
    return of(this.mockTasks);
  }

  private initMockData() {
    const today = new Date(),
      nextSevenDay = this.addDays(today, 7)

    let dateVar = this.addDays(today, -4);

    for (let i = 0; i < 15; i++) {
      this.mockTasks.push({
        id: i,
        title: `Task ${i}`,
        deadline: new Date(dateVar),
        categoryId: i % 4,
        description: `Task ${i} description`,
        reminder: this.addDays(dateVar, -1)
      })
      dateVar = this.addDays(dateVar, 1);
    }

    this.mockUpComingTasks = this.mockTasks.filter(t => t.deadline!.getDate() <= nextSevenDay.getDate() && t.deadline!.getDate() > today.getDate());

    for (let i = 0; i < 4; i++) {
      this.mockCategories.push({
        id: i,
        name: `Category ${i}`
      })
    }
  }

  private addDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
