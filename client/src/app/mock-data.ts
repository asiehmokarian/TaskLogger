import { Task } from './models/task.model';
import { Category } from './models/category.model';

export const TASKS: Task[] = [
  { id: 1, title: "Task1", categoryId: 1, deadline: new Date(2021, 10, 2), description: "Task1 description", reminder: new Date(2021, 10, 1) },
  { id: 2, title: "Task2", categoryId: 2, deadline: new Date(2021, 10, 5), description: "Task1 description", reminder: new Date(2021, 10, 1) },
  { id: 3, title: "Task3", categoryId: 3, deadline: new Date(2021, 11, 2), description: "Task1 description", reminder: new Date(2021, 10, 1) },
  { id: 4, title: "Task4", categoryId: 3, deadline: new Date(2021, 10, 7), description: "Task1 description", reminder: new Date(2021, 10, 1) },
  { id: 5, title: "Task5", categoryId: 1, deadline: new Date(2021, 11, 5), description: "Task1 description", reminder: new Date(2021, 10, 1) },
  { id: 6, title: "Task6", categoryId: 1, deadline: new Date(2021, 10, 7), description: "Task1 description", reminder: new Date(2021, 10, 1) },
  { id: 7, title: "Task7", categoryId: 1, deadline: new Date(2021, 10, 2), description: "Task1 description", reminder: new Date(2021, 10, 1) }
]

export const CATEGORIES: Category[] = [
  { id: 1, name: "Project1" },
  { id: 2, name: "Project2" },
  { id: 3, name: "Project3" }
] 
