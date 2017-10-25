import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment';
import { CartService } from './../cart/cart.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PaymentService{

  
  constructor(private http:HttpClient,private cartService:CartService){};
  url="http://localhost:3000/api/Payments";
 
  savePayment(payment:Payment):void{
    let body={
    "firstName":payment.firstName,
    "lastName":payment.lastName,
    "street":payment.street,
    "city":payment.city,
    "state":payment.state,

    "zip": payment.zip,
    "amount":this.cartService.getAllFees,
    }
    
    this.http.post(this.url,body).subscribe();
  }

  public create(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.url, payment);
  }
  updatePayment(payment:Payment):void{
    let body={
    "firstName":payment.firstName,
    "lastName":payment.lastName,
    "street":payment.street,
    "city":payment.city,
    "state":payment.state,

    "zip": payment.zip,
    "amount":this.cartService.getAllFees,
    }
    
    this.http.put(this.url+'/'+payment.firstName,body).subscribe();
  }

  deletePayment(payment:Payment):void{
    this.http.delete(this.url+'/'+payment.firstName).subscribe(); 
  }

 

  public get(id: String): Observable<Payment> {
    return this.http.get<Payment>(`${this.url}/${id}`);
  }
   
  
  public list(): Observable<Array<Payment>> {
    return this.http.get<Array<Payment>>(this.url);
  }
}