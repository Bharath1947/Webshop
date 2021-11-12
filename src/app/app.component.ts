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
    this.crudService.create_NewProduct(record).then(resp => {
      this.productName = "";
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
    record.EditName = record.Name;
  }

  UpdateRecord(recordRow:any) {
    let record : {[key:string]: string} = {};
    record['Name'] = recordRow.EditName['Name'];
    this.crudService.update_Product(recordRow.id, record);
    recordRow.isEdit = false;
  }


}
