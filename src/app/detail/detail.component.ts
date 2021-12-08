import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  products: any;
  sizes: any;
  productName: string | undefined;
  containerNo: string | undefined;
  size: string | undefined;
  type: string | undefined;
  price: number | undefined;
  imagePath: string | undefined;
  resProduct: any;
  resSize: any;
  product: any;
  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    const id = this.activatedRoute.snapshot.params['id'];

    console.log(id);

    this.crudService.read_Single_Product(id).subscribe((res) => {
      this.resProduct = res;
    });

    this.crudService.read_Sizes().subscribe((data) => {
      this.sizes = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          size: e.payload.doc.data(),
        };
      });
      console.log('sizes');
      console.log(this.sizes);
      console.log('size');
      console.log(this.sizes.size);
    });

    // this.crudService.read_Single_Size(sizeCode).subscribe((res) => {
    //   this.resSize = res;
    // });
    (<any>$('item-img-main')).imagezoomsl();
  }
}
