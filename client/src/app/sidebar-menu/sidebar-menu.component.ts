import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  @Output() collapsedChange = new EventEmitter<boolean>();
  @Input() collapsed = true;
  activeId = "1";

  constructor() { }

  ngOnInit(): void {
  }

}
