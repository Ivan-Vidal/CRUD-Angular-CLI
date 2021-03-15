import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../products-create/product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

product: Product

  constructor(private service: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(){
    this.service.delete(this.product.id).subscribe(() => {
      this.service.ShowMessage('Produto deletado com sucesso !')
      this.router.navigate(['/products'])  

  })
}

  cancel(){
 this.router.navigate(['/products'])
  }

}
