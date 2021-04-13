export interface Task {
  id?: number;
  title?: string;
  description?: string;
  reminder?: Date;
  deadline?: Date;
  categoryId?: number;

  //constructor(id: number, title: string, deadline: Date, categoryId: number, description?: string, reminder?: Date) {
  //  this.id = id;
  //  this.title = name;
  //  this.deadline = deadline;
  //  this.categoryId = categoryId;
  //  this.description = description;
  //  this.reminder = reminder;
  //}
}
