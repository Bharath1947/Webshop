import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }
  create_NewProduct(item: any) {
    return this.firestore.collection('Products').add(item);
  }

  read_Products() {
    return this.firestore.collection('Products').snapshotChanges();
  }

  update_Product(itemID:any ,item:any){
    this.firestore.doc('Products/' + itemID).update(item);
  }

  delete_Product(itemID:any) {
    this.firestore.doc('Products/' + itemID).delete();
  }

}
