import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products-create/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private service: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(){
    this.service.update(this.product).subscribe( ()=> {
    this.service.ShowMessage('Produto alterado com sucesso !')
    this.router.navigate(['/products'])  
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }

}
