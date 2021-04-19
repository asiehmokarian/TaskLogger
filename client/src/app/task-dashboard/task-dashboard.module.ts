import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from '../app-routing.module';
import { CategoryNamePipe } from './category-name.pipe';
import { TaskUpcomingComponent } from './task-upcoming/task-upcoming.component';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
    CategoriesComponent,
    CategoryNamePipe,
    TaskUpcomingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

    CommonComponentsModule,
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskDashboardModule { }
