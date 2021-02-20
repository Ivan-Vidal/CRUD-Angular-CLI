import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  constructor(private service: ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  createProduct():void {
    this.service.ShowMessage('Realizado com sucesso')
  }
  
  cancel():void {
    this.router.navigate(['/products'])
    }

}
