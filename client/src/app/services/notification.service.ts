import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private expiredNotifications = new Subject<Notification>();
  private activeNotifications: Notification[] = [];

  expiredNotification$ = this.expiredNotifications.asObservable();

  constructor() { }

  add(notification: Notification) {
    this.removeIfExist(notification.taskId);
    if (notification.taskReminder) {
      const interval = new Date(notification.taskReminder).getTime() - Date.now();
      const notificaionId = window.setTimeout(() => {
        this.expiredNotifications.next(notification);

        const index = this.activeNotifications.findIndex(n => n.id === notificaionId);
        if (index > -1) {
          this.activeNotifications.splice(index, 1);
        }
      }, interval);

      notification.id = notificaionId;
      this.activeNotifications.push(notification);
    }
  }

  private removeIfExist(taskId: number): void {
    const index = this.activeNotifications.findIndex(n => n.taskId === taskId);
    if (index > -1) {
      clearTimeout(this.activeNotifications[index].id);
      this.activeNotifications.splice(index, 1);
    }
  }
}
