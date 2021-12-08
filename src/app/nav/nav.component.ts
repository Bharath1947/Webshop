import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showLogin: boolean = false;
  constructor() {}
  ngOnInit(): void {}

  @Output()
  loginClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  userClick() {
    this.showLogin = true;
    this.loginClicked.emit(this.showLogin);
    console.log(this.showLogin);
  }
}
