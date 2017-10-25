import { Component,OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import {Product} from './product/product';


@Component({
    selector:"my-app",
    templateUrl: './app.component.html',
    
    styleUrls:['./app.component.css']
})

export class AppComponent{
    title = 'Tour of Products';
}