import { Component,OnInit  } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webshop1';
  products :any;
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


  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Products().subscribe(data => {

      this.products = data.map(e => {
        return {
         //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()
        };
      })
      console.log(this.products);

    });
  }

  CreateRecord() {
    //let record ={};
    let record : {[key:string]: string} = {};
    //record['Name'] = this.productName!;
    record['Name'] = this.productName || '';
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

    this.crudService.create_NewProduct(record).then(resp => {
      this.productName = "";
      this.containerNo = "";
      this.size = "";
      this.type = "";
      this.saleCondition = "";
      this.color = "";
      this.depot = "";
      this.manufactureDate = "";
      this.floor = "";
      this.payload = "";
      this.tare = "";
      this.maxGrossWeight = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID:number) {
    this.crudService.delete_Product(rowID);
  }

  EditRecord(record:any) {
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

   // record.EditName = record.containerNo;
  }

  UpdateRecord(recordRow:any) {
    let record : {[key:string]: string} = {};
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
    this.crudService.update_Product(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
