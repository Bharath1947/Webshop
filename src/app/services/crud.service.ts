import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}
  create_NewProduct(item: any) {
    return this.firestore.collection('Products').add(item);
  }

  read_Products() {
    return this.firestore.collection('Products').snapshotChanges();
  }

  read_Single_Product(itemID: any) {
    return this.firestore.collection('Products').doc(itemID).valueChanges();
  }

  update_Product(itemID: any, item: any) {
    this.firestore.doc('Products/' + itemID).update(item);
  }

  delete_Product(itemID: any) {
    this.firestore.doc('Products/' + itemID).delete();
  }

  read_Sizes() {
    return this.firestore.collection('Sizes').snapshotChanges();
  }
  read_Single_Size(itemCode: any) {
    return this.firestore.collection('Sizes').doc(itemCode).valueChanges();
  }

  read_Types() {
    return this.firestore.collection('Types').snapshotChanges();
  }
  read_Conditions() {
    return this.firestore.collection('SaleConditions').snapshotChanges();
  }
  read_Colors() {
    return this.firestore.collection('Colors').snapshotChanges();
  }
  read_Floors() {
    return this.firestore.collection('Floors').snapshotChanges();
  }
  read_Iso() {
    return this.firestore.collection('Iso').snapshotChanges();
  }
  read_Depots() {
    return this.firestore.collection('Depots').snapshotChanges();
  }
}
