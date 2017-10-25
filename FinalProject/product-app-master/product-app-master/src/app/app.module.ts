import { PaymentDetailComponent } from './payment/payment-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ProductDetailComponent} from './product-detail/product-detail.component';
import { CartDetailComponent } from './cart/cart-detail.component';
import {calculateTotalFeePipe} from './cart/countpipe';
import {ProductsComponent} from './product/products.component';
import {ProductService} from './product/product.service';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HttpClient,HttpClientModule }    from '@angular/common/http';
import { ProductManageModule } from './productmanagement/productmanagement.module';

import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentService } from './payment/payment.service';
import { CartService } from './cart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    CartDetailComponent,
    calculateTotalFeePipe,
    ProductsComponent,
    DashboardComponent,
    PaymentComponent,
    NavbarComponent,
    PaymentDetailComponent
   
  ],
  imports: [
  
  BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ProductManageModule
  ],
  providers: [ProductService,HttpClient,PaymentService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
