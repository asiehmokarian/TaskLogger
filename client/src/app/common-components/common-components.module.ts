import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NotificationsComponent } from './notifications/notifications.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    NotificationsComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    NotificationsComponent,
    ChartComponent
  ]
})
export class CommonComponentsModule { }
