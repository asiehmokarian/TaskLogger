import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
    const interval = new Date(notification.taskReminder).getTime() - Date.now();
    const notificaionId = window.setTimeout(() => {
      this.expiredNotifications.next(notification);

      const notificationIndex = this.activeNotifications.findIndex(n => n.id === notificaionId);
      this.activeNotifications.splice(notificationIndex, 1);
    }, interval);

    notification.id = notificaionId;
    this.activeNotifications.push(notification);
  }

  //get(): Subject<Reminder[]> {
  //  return this.notifications;
  //}

  clear() {
    //this.notifications.complete();
  }

  remove(message: string) {

  }
}
