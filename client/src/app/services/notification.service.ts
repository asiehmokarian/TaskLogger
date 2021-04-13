import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: string[] = [];

  constructor() { }

  add(message: string) {
    this.notifications.push(message);
  }

  clear() {
    this.notifications = [];
  }

  remove(message: string) {
    const index = this.notifications.indexOf(message);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }
  }
}
