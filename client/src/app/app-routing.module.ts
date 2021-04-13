import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './task-dashboard/categories/categories.component';
import { TaskDetailComponent } from './task-dashboard/task-detail/task-detail.component';
import { TaskListComponent } from './task-dashboard/task-list/task-list.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/tasks' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
