export interface Task {
  id?: number;
  title?: string;
  description?: string;
  reminder?: Date;
  deadline?: Date;
  categoryId?: number;
}
