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
  sizes: any;
  types: any;
  conditions: any;
  colors: any;
  depots: any;
  floors: any;
  isos: any;

  productName: string | undefined;
  containerNo: string | undefined = 'CONT00000';
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
          Product: e.payload.doc.data(),
        };
      });
      console.log(this.products);
    });

    this.crudService.read_Sizes().subscribe((data) => {
      this.sizes = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          size: e.payload.doc.data(),
        };
      });
      console.log(this.sizes);
    });

    this.crudService.read_Types().subscribe((data) => {
      this.types = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          type: e.payload.doc.data(),
        };
      });
      console.log(this.types);
    });

    this.crudService.read_Conditions().subscribe((data) => {
      this.conditions = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          condition: e.payload.doc.data(),
        };
      });
      console.log(this.conditions);
    });

    this.crudService.read_Colors().subscribe((data) => {
      this.colors = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          color: e.payload.doc.data(),
        };
      });
      console.log(this.colors);
    });

    this.crudService.read_Floors().subscribe((data) => {
      this.floors = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          floor: e.payload.doc.data(),
        };
      });
      console.log(this.floors);
    });

    this.crudService.read_Iso().subscribe((data) => {
      this.isos = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          iso: e.payload.doc.data(),
        };
      });
      console.log(this.isos);
    });

    this.crudService.read_Depots().subscribe((data) => {
      this.depots = data.map((e) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          depot: e.payload.doc.data(),
        };
      });
      console.log(this.depots);
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
      : 'https://www.pikpng.com/pngl/b/363-3632522_shipping-container-png-shipping-container-clipart.png';
    record['iso'] = this.iso || '';

    this.crudService
      .create_NewProduct(record)
      .then((resp) => {
        this.productName = '';
        this.containerNo = 'CONT00000';
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
    record.Product.EditName = record.Product['Name'];
    record.Product.EditContainerNo = record.Product['containerNo'];
    record.Product.EditSize = record.Product['size'];
    record.Product.EditType = record.Product['type'];
    record.Product.EditSaleCondition = record.Product['saleCondition'];
    record.Product.EditColor = record.Product['color'];
    record.Product.EditDepot = record.Product['depot'];
    record.Product.EditManufactureDate = record.Product['manufactureDate'];
    record.Product.EditFloor = record.Product['floor'];
    record.Product.EditPayload = record.Product['payload'];
    record.Product.EditTare = record.Product['tare'];
    record.Product.EditMaxGrossWeight = record.Product['maxGrossWeight'];
    record.Product.EditPrice = record.Product['price'];
    record.Product.EditIso = record.Product['iso'];
    record.Product.EditImagePath = record.Product['imagePath'];
    // record.EditName = record.containerNo;
  }

  UpdateRecord(recordRow: any) {
    let record: { [key: string]: string } = {};
    record['Name'] = recordRow.Product['EditName'];
    record['containerNo'] = recordRow.Product['EditContainerNo'];
    record['size'] = recordRow.Product['EditSize'];
    record['type'] = recordRow.Product['EditType'];
    record['saleCondition'] = recordRow.Product['EditSaleCondition'];
    record['color'] = recordRow.Product['EditColor'];
    record['depot'] = recordRow.Product['EditDepot'];
    record['manufactureDate'] = recordRow.Product['EditManufactureDate'];
    record['floor'] = recordRow.Product['EditFloor'];
    record['payload'] = recordRow.Product['EditPayload'];
    record['tare'] = recordRow.Product['EditTare'];
    record['maxGrossWeight'] = recordRow.Product['EditMaxGrossWeight'];
    record['price'] = recordRow.Product['EditPrice'];
    record['iso'] = recordRow.Product['EditIso'];
    record['imagePath'] = recordRow.Product['EditImagePath'];
    this.crudService.update_Product(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
