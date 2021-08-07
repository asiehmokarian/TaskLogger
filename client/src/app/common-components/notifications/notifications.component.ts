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
    this.notificationService.expiredNotification$.subscribe(notification => this.notifications.push(notification));
  }

  ngOnInit(): void {
  }

  dismiss(notificationId: number) {
    const index = this.notifications.findIndex((n) => n.id === notificationId);
    this.notifications.splice(index, 1);
  }

  dismissAll() {
    this.notifications = [];
  }
}
