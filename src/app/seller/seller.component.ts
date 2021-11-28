import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {
  title = 'webshop1';
  products: any;
  productName: string | undefined;
  containerNo: string | undefined;
  size: string | undefined;
  type: string | undefined;
  saleCondition: string | undefined;
  color: string | undefined;
  depot: string | undefined;
  manufactureDate: string | undefined;
  floor: string | undefined;
  payload: string | undefined;
  tare: string | undefined;
  maxGrossWeight: string | undefined;
  price: number | undefined;
  imagePath: string | undefined;
  iso: string | undefined;

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

  CreateRecord() {
    //let record ={};
    let record: { [key: string]: string | number } = {};
    //record['Name'] = this.productName!;
    record['Name'] = this.productName
      ? this.productName.toUpperCase()
      : (
          this.saleCondition +
          ' ' +
          this.size +
          ' ' +
          this.type +
          ' Container ' +
          (this.payload ? '-' + this.payload + 'ton' : '')
        ).toUpperCase();
    record['containerNo'] = this.containerNo || '';
    record['size'] = this.size || '';
    record['type'] = this.type || '';
    record['saleCondition'] = this.saleCondition || '';
    record['color'] = this.color || '';
    record['depot'] = this.depot || '';
    record['manufactureDate'] = this.manufactureDate || '';
    record['floor'] = this.floor || '';
    record['payload'] = this.payload || '';
    record['tare'] = this.tare || '';
    record['maxGrossWeight'] = this.maxGrossWeight || '';
    record['price'] = this.price || '';
    record['imagePath'] = this.imagePath
      ? this.imagePath
      : 'https://www.icon-container.de/media/images/finder/container/standard-container-20-dry-van-02.jpg';
    record['iso'] = this.iso || '';

    this.crudService
      .create_NewProduct(record)
      .then((resp) => {
        this.productName = '';
        this.containerNo = '';
        this.size = '';
        this.type = '';
        this.saleCondition = '';
        this.color = '';
        this.depot = '';
        this.manufactureDate = '';
        this.floor = '';
        this.payload = '';
        this.tare = '';
        this.maxGrossWeight = '';
        this.price = 0;
        this.imagePath = '';
        this.iso = '';
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  RemoveRecord(rowID: number) {
    this.crudService.delete_Product(rowID);
  }

  EditRecord(record: any) {
    record.isEdit = true;
    record.EditName.Name = record.Name;
    record.EditName.containerNo = record.containerNo;
    record.EditName.size = record.size;
    record.EditName.type = record.type;
    record.EditName.saleCondition = record.saleCondition;
    record.EditName.color = record.color;
    record.EditName.depot = record.depot;
    record.EditName.manufactureDate = record.manufactureDate;
    record.EditName.floor = record.floor;
    record.EditName.payload = record.payload;
    record.EditName.tare = record.tare;
    record.EditName.maxGrossWeight = record.maxGrossWeight;
    record.EditName.price = record.price;
    record.EditName.iso = record.iso;

    // record.EditName = record.containerNo;
  }

  UpdateRecord(recordRow: any) {
    let record: { [key: string]: string } = {};
    record['Name'] = recordRow.EditName['Name'];
    record['containerNo'] = recordRow.EditName['containerNo'];
    record['size'] = recordRow.EditName['size'];
    record['type'] = recordRow.EditName['type'];
    record['saleCondition'] = recordRow.EditName['saleCondition'];
    record['color'] = recordRow.EditName['color'];
    record['depot'] = recordRow.EditName['depot'];
    record['manufactureDate'] = recordRow.EditName['manufactureDate'];
    record['floor'] = recordRow.EditName['floor'];
    record['payload'] = recordRow.EditName['payload'];
    record['tare'] = recordRow.EditName['tare'];
    record['maxGrossWeight'] = recordRow.EditName['maxGrossWeight'];
    record['price'] = recordRow.EditName['price'];
    record['iso'] = recordRow.EditName['iso'];
    this.crudService.update_Product(recordRow.id, record);
    recordRow.isEdit = false;
  }
}