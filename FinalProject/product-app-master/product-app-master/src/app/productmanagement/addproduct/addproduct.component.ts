import { Component } from '@angular/core';
import {ProductService} from '../../product/product.service';
import {Product,Conditions} from '../../product/product';
import {Router} from '@angular/router';

@Component({
    selector: 'product-form',
    templateUrl: './addproduct.component.html',
    providers:[ProductService],
    styles:[`div{
        width:250px
    }`]
    })
export class AddProductComponent {
    constructor(private productservice:ProductService, private router:Router){};
        
    submit(form){
        if(form.value.product_id){
            this.productservice.addProduct(new Product(
                form.value.product_id,
                form.value.product_name,
                form.value.product_description,
                parseInt(form.value.product_price) ,
                form.value.product_condition,
                form.value.product_category
            ))
        };
        this.router.navigate([""]);
    }
}