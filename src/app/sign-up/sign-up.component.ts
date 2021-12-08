import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  users: any;
  email: string | undefined;
  userName: string | undefined;
  mobileNo: string | undefined;
  password: string | undefined;
  company: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  address: string | undefined;
  postalCode: string | undefined;
  city: string | undefined;
  country: string | undefined;
  region: string | undefined;
  continent: string | undefined;
  imagePath: string | undefined;
  displayName: string | undefined;

  showSignup: boolean = true;
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.read_Users().subscribe((data) => {
      this.users = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          user: e.payload.doc.data(),
        };
      });
      console.log(this.users);
    });
  }

  @Output()
  loginClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  backToLogin() {
    this.showSignup = false;
    this.loginClicked.emit(this.showSignup);
  }
  createUser() {
    //let record ={};
    let record: { [key: string]: string | number } = {};
    //record['Name'] = this.productName!;
    record['displayName'] = this.displayName || '';
    record['email'] = this.email || '';
    record['userName'] = this.userName ? this.userName.toUpperCase() : '';
    record['mobileNo'] = this.mobileNo || '';
    record['password'] = this.password || '';
    record['company'] = this.company || '';
    record['firstName'] = this.firstName || '';
    record['lastName'] = this.lastName || '';
    record['address'] = this.address || '';
    record['postalCode'] = this.postalCode || '';
    record['city'] = this.city || '';
    record['country'] = this.country || '';
    record['region'] = this.region || '';
    record['continent'] = this.continent || '';
    record['imagePath'] = this.imagePath
      ? this.imagePath
      : './assets/images/maniraj.jpg';

    this.crudService
      .create_NewUser(record)
      .then((resp) => {
        this.displayName = '';
        this.email = '';
        this.userName = '';
        this.mobileNo = '';
        this.password = '';
        this.company = '';
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.postalCode = '';
        this.city = '';
        this.country = '';
        this.region = '';
        this.continent = '';
        this.imagePath = '';
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
