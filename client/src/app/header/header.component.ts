import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = "Task logger";
  @Output() navbarTogglerEvent = new EventEmitter<boolean>();
  sidebarMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }
}
