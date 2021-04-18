import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() source: any[] = [];

  // options pie
  gradient = false;
  showLegend = true;
  legendTitle = "Categories:";
  showLabels = false;
  isDoughnut = false;
  animations = false;
  legendPosition = 'right';

  // options bar
  //showXAxis = true
  //showYAxis = true;
  //gradient = false;
  //showLegend = true;
  //showXAxisLabel = true;
  //xAxisLabel = "Category";
  //showYAxisLabel = true;
  //yAxisLabel = "Task";

  colorScheme = {
    domain: ["rgb(168, 56, 93)", "rgb(122, 163, 229)", "rgb(162, 126, 168)", "rgb(170, 227, 245)"]
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
