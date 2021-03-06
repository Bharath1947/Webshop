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
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { TabComponent } from './tab/tab.component';
import { BuyerComponent } from './buyer/buyer.component';
//import { ajax, css } from "jquery";
import * as $ from 'jquery';
const appRoutes: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'shop', component: ShopComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignUpComponent },
  // { path: 'sell', component: SellerComponent },
  // { path: 'dashboard', component: DashboradComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'app', component: AppComponent },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', component: ShopComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    SellerComponent,
    ShopComponent,
    HomeComponent,
    ContactComponent,
    CartSideComponent,
    DetailComponent,
    LoginComponent,
    SignUpComponent,
    NavComponent,
    FootComponent,
    TabComponent,
    BuyerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CrudService],
  bootstrap: [AppComponent, FootComponent],
})
export class AppModule {}
