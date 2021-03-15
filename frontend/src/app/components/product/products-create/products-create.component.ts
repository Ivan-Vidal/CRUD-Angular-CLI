import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null

  }

  constructor(private service: ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  createProduct():void {
   this.service.create(this.product).subscribe(()=>{
    this.service.ShowMessage('Cadastro realizado com sucesso !')
    this.router.navigate(['/products'])
   })
    
  }
  
  cancel():void {
    this.router.navigate(['/products'])
    }

}
