import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss', './rating.scss', './multiCheck.scss'],
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
  sizes: string[] = [''];
  uSizes: string[] = [''];
  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit() {
    this.crudService.read_Products().subscribe((data) => {
      this.products = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          Product: e.payload.doc.data(),
        };
      });
      console.log(this.products);
      for (var product of this.products) {
        //console.log(product['Product'].size);
        this.sizes.push(product['Product'].size.toString());
        // console.log(this.sizes);
      }
      console.log(this.sizes);
      //To remove empty string
      this.sizes = this.sizes.filter((item) => item);
      console.log(this.sizes);
      //To get unique value
      this.uSizes = this.sizes.filter(this.onlyUnique);
      console.log(this.uSizes);
    });
  }
  onlyUnique(value: any, index: any, self: any) {
    // console.log('value ' + value);
    // console.log('index ' + index);
    // console.log('self ' + self);
    // console.log('self.indexOf ' + self.indexOf(value));
    if (self.indexOf(value) === index) console.log('Equals');
    else console.log('Not Equals');
    return self.indexOf(value) === index;
  }

  btnClick() {
    //this.router.navigateByUrl('/detail');
    this.showShop = false;
    //shopMainDiv;
  }

  testClick() {
    console.log('products');
    console.log(this.products);
    // console.log('before for');
    // console.log(this.products.product);
    // for (var product of this.products) {
    //   console.log(product['Product'].size);
    // }
  }
  productBackup: any = [];
  tempArray: any = [];
  newArray: any = [];
  filterArray: any = [];
  sizeChange(event: any) {
    this.productBackup = this.products;
    console.log(event.target.value);
    console.log('productBackup');
    console.log(this.productBackup);
    if (event.target.checked) {
      // console.log(this.products);

      for (var product of this.products) {
        console.log('for product');
        this.newArray.push(product['Product']);
      }
      console.log(this.newArray);
      this.tempArray = this.newArray.filter(
        (e: any) => e.size == event.target.value
      );
      console.log(this.tempArray);

      // for (var product of this.products) {
      //   this.products.product = {};
      // }
      for (let i = 0; i < this.tempArray.length; i++) {
        // this.products['product'] = this.tempArray[i];
        console.log(this.tempArray[i].containerNo);
        for (var product of this.products) {
          // console.log(product);
          if (product.Product.containerNo === this.tempArray[i].containerNo) {
            this.filterArray.push(product);
            console.log('filterArray');
            console.log(this.filterArray);
          }
        }
      }
      this.products = [];
      this.products = this.filterArray;
      console.log('filterProducts');
      console.log(this.products);

      // console.log(this.products);
      //this.products.push(this.tempArray);
    } else {
      this.products = this.productBackup;
      console.log('else product');
      console.log(this.products);
      // console.log('Else statement ------------');
      // for (var product of this.products) {
      //   //console.log('for product');
      //   this.newArray.push(product['Product']);
      // }
      // console.log(this.newArray);
      // this.tempArray = this.newArray.filter(
      //   (e: any) => e.size == event.target.value
      // );
      // console.log(this.tempArray);
    }
  }

  expanded: boolean = false;
  styleVal: string = 'none';
  showCheckboxes() {
    if (!this.expanded) {
      this.styleVal = 'block';
      this.expanded = true;
    } else {
      this.styleVal = 'none';
      this.expanded = false;
    }
  }
}
