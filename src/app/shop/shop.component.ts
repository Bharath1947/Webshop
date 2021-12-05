import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss', './rating.scss'],
})
export class ShopComponent implements OnInit {
  products: any;
  productName: string | undefined;
  containerNo: string | undefined;
  size: string | undefined;
  type: string | undefined;
  price: number | undefined;
  imagePath: string | undefined;
  showShop: boolean = true;
  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit() {
    this.crudService.read_Products().subscribe((data) => {
      this.products = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          isEdit: false,
          Product: e.payload.doc.data(),
        };
      });
      console.log(this.products);
    });
  }

  btnClick() {
    //this.router.navigateByUrl('/detail');
    this.showShop = !this.showShop;
    //shopMainDiv;
  }
}
