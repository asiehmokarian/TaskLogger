import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Reminder } from '../models/reminder.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  constructor() { }

  private reminders: Reminder[] = [];

  //private reminders = new Subject<Reminder>();
  addReminder(reminder: Reminder) {
    var index = this.reminders.findIndex((r) => r.taskId === reminder.taskId);
    if (index < 0)
      this.reminders.push(reminder);
    else
      this.reminders[index].reminderDate = reminder.reminderDate;
  }

  deleteReminder(taskId: number) {
    var index = this.reminders.findIndex((r) => r.taskId === taskId);
    if (index > -1) {
      this.reminders.splice(index, 1);
    }
  }
}
