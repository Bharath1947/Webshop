import { Component, OnInit } from '@angular/core';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shopShareObj: { [key: string]: string } = {};
  detailShareObj: { [key: string]: string } = {};
  constructor() {}
  ngOnInit() {}
}
