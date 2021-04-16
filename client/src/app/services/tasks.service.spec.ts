import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Task } from '../models/task.model';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: TasksService;
  let expectedTasks: Task[];

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
          TasksService,
            { provide: HttpClient, useValue: spy }
      ]
    });
    service = TestBed.inject(TasksService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTasks should return expected tasks (HttpClient called once)', () => {
    const expectedTasks =
      [
        { id: 1, categoryId: 1, deadline: new Date(), description: "task 1 des", title: "task 1", reminder: new Date() },
        { id: 2, categoryId: 2, deadline: new Date(), description: "task 2 des", title: "task 2", reminder: new Date() }
      ]
    httpClientSpy.get.and.returnValue(of(expectedTasks));

    service.getTasks().subscribe(tasks => { expect(tasks).toEqual(expectedTasks, 'expected tasks') }, fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  })

  it('getTask should return expected task (HttpClient called once)', () => {
    const expectedTask = { id: 1, categoryId: 1, deadline: new Date(), description: "task 1 des", title: "task 1", reminder: new Date() };
    httpClientSpy.get.and.returnValue(of(expectedTask));

    service.getTask(1).subscribe(task => { expect(task).toEqual(expectedTask, 'expected task') }, fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  })

  it('should handle the error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
    httpClientSpy.get.and.returnValue(of(errorResponse));

    service.getTasks().subscribe(error => { expect((error[0] as HttpErrorResponse).message).toContain('test 404 error') },
      () => fail('expected error to be handled')
    );
  })
});
