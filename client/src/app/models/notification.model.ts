export interface Notification {
  id?: number,
  taskId: number,
  taskTitle: string,
  taskReminder: Date;
  taskDeadline: Date;
}
