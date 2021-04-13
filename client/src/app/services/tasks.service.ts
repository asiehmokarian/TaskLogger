import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../models/category.model';
import { Task } from '../models/task.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private serviceUrl = '/api';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  taskCategories: Category[] | null = null;

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  getTasks(): Observable<Task[]> {
    const url = `${this.serviceUrl}/tasks`;
    return this.http.get<Task[]>(url)
      .pipe(
        tap((tasks) => this.addNotification(`Fetched ${tasks.length} tasks.`)),
        catchError(this.handleError<Task[]>('getTasks', []))
      );
  }

  getTask(id: number): Observable<Task> {
    const url = `${this.serviceUrl}/tasks/${id}`;
    return this.http.get<Task>(url)
      .pipe(
        tap(() => this.addNotification(`Fetched task id = ${id}.`)),
        catchError(this.handleError<Task>(`getTask id = ${id}`))
      );
  }

  getUpComingTasks(): Observable<Task[]> {
    const url = `${this.serviceUrl}/upcomingTasks`;
    return this.http.get<Task[]>(url)
      .pipe(
        tap((tasks) => this.addNotification(`Fetched ${tasks.length} upcoming tasks.`)),
        catchError(this.handleError<Task[]>('upcomingtasks', []))
      );
  }

  updateTask(task: Task): Observable<any> {
    const url = `${this.serviceUrl}/tasks/${task.id}`;
    return this.http.put(url, task, this.httpOptions)
      .pipe(
        tap(() => this.addNotification(`Updated task id = ${task.id}.`)),
        catchError(this.handleError<any>(`updateTask id = ${task.id}`))
      );
  }

  addTask(task: Task): Observable<Task> {
    const url = `${this.serviceUrl}/tasks`;
    return this.http.post<Task>(url, task, this.httpOptions)
      .pipe(
        tap((task) => this.addNotification(`Added task id = ${task.id}.`)),
        catchError(this.handleError<Task>(`addTask title = ${task.title}`))
      );
  }

  getTaskCategories(): Observable<Category[]> {
    const url = `${this.serviceUrl}/categories`;
    return this.http.get<Category[]>(url)
      .pipe(
        tap((categories) => {
          this.taskCategories = categories;
          this.addNotification(`Fetched ${categories.length} tasks categories.`);
        }),
        catchError(this.handleError<Category[]>('getTaskCategories', []))
      );
  }

  getTaskByCategory(categoryId: number): Observable<Task[]> {
    const url = `${this.serviceUrl}/tasks/?categoryId=${categoryId}`;
    return this.http.get<Task[]>(url)
      .pipe(
        tap((tasks) => this.addNotification(`Fetched ${tasks.length} tasks.`)),
        catchError(this.handleError<Category[]>('getTaskByCategory', []))
      );
  }

  addNotification(message: string): void {
    this.notificationService.add(`Task service: ${message}`);
  }

  handleError<T>(operation: string, result?: T): (err: any) => Observable<T> {
    return (err): Observable<T> => {
      console.error(err);
      this.addNotification(`${operation} failed:${err.body.error}`);
      return of(result as T);
    }
  }
}
