import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  shopShareObj: { [key: string]: string } = {};
  detailShareObj: { [key: string]: string } = {};
  constructor() {}

  ngOnInit(): void {}
}
