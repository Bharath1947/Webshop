import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showLogin: boolean = false;
  constructor() {}

  ngOnInit() {}

  userClick(login: any): void {
    this.showLogin = login;
    console.log('app - login ' + this.showLogin);
  }
  loginClick() {
    this.showLogin = true;
  }
}
