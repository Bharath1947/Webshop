import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss'],
})
export class DashboradComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onlyUnique(value: any, index: any, self: any) {
    // console.log('value ' + value);
    // console.log('index ' + index);
    // console.log('self ' + self);
    // console.log('self.indexOf ' + self.indexOf(value));
    if (self.indexOf(value) === index) console.log('Equals');
    else console.log('Not Equals');
    return self.indexOf(value) === index;
  }

  // usage example:
  a: any = [1, 1, 1, 1];
  unique: any = this.a.filter(this.onlyUnique);

  // ['a', 1, 2, '1']
}
