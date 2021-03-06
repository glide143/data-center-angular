import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: [`.btn { background-color: #999999; }`]
})
export class NavbarComponent {

  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  refresh() {
    this.onRefresh.emit();
  }

}
