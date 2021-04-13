import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: string[] = this.notificationService.notifications;

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onRemove(notification: string) {
    this.notificationService.remove(notification);
  }

  removeAll() {
    this.notifications = [];
    this.notificationService.clear();
  }
}
