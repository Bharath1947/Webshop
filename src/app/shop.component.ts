import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: [`./shop.component.scss`],
})
export class ShopComponent implements OnInit {
  products: any;
  productName: string | undefined;
  containerNo: string | undefined;
  size: string | undefined;
  type: string | undefined;
  price: string | undefined;
  imagePath: string | undefined;
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.read_Products().subscribe((data) => {
      this.products = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data(),
        };
      });
      console.log(this.products);
    });
  }
}
