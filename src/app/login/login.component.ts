import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showSignup: boolean = false;
  showLogin: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  @Output()
  navClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  signupClick() {
    this.showSignup = true;
  }

  backToShop() {
    this.showLogin = false;
    this.navClicked.emit(this.showLogin);
  }

  loginClick(signup: any): void {
    this.showSignup = signup;
    console.log('app - login ' + this.showSignup);
  }
}
