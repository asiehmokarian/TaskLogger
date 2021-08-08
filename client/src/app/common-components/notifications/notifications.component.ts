import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.model';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];

  constructor(public notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.notificationService.expiredNotification$.subscribe(notification => this.addNotification(notification));
  }

  addNotification(notification: Notification): void {
    const index = this.notifications.findIndex(n => n.taskId === notification.taskId);
    if (index > -1) {
      this.notifications[index] = notification;
    }
    else {
      this.notifications.push(notification)
    }
  }

  dismiss(notificationId: number) {
    const index = this.notifications.findIndex((n) => n.id === notificationId);
    this.notifications.splice(index, 1);
  }

  dismissAll() {
    this.notifications = [];
  }
}
