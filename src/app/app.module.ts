import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { FormGroupName } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CrudService } from './services/crud.service';
import { DashboradComponent } from './dashborad/dashborad.component';
import { SellerComponent } from './seller/seller.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartSideComponent } from './cart-side/cart-side.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    SellerComponent,
    ShopComponent,
    HomeComponent,
    ContactComponent,
    CartSideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [CrudService],
  bootstrap: [AppComponent, CartSideComponent],
})
export class AppModule {}
