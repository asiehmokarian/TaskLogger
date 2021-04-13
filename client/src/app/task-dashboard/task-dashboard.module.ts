import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskDashboardModule { }