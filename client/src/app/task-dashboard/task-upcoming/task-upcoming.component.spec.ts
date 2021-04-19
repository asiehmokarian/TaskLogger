import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksService } from '../../services/tasks.service';
import { TasksServiceMock } from '../../services/tests/tasks.service.mock';

import { TaskUpcomingComponent } from './task-upcoming.component';

describe('TaskUpcomingComponent', () => {
  let component: TaskUpcomingComponent;
  let fixture: ComponentFixture<TaskUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskUpcomingComponent],
      providers: [
        { provide: TasksService, useClass: TasksServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
