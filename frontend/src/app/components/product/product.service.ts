import { HttpClient } from '@angular/common/http';
import { Injectable, LOCALE_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY } from 'rxjs';
import { EmptyError, Observable, ObservableInput } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './products-create/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl = 'http://localhost:3000/products'
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
    
  }
  
  ShowMessage(msg:string, isError: boolean = false):void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      )
    }

    readById(id: string) : Observable<Product> {
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Product>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
        )
      }
      
      update(product: Product): Observable<Product>{
        const url =`${this.baseUrl}/${product.id}`
        return this.http.put<Product>(url, product).pipe(
          map((obj) => obj),
          catchError(e => this.errorHandler(e))
          )
        }
        
        delete(id: number): Observable<Product>{
          const url = `${this.baseUrl}/${id}`
          return this.http.delete<Product>(url).pipe(
            map((obj) => obj),
            catchError(e => this.errorHandler(e))
            )
          }

          errorHandler(e: any): Observable<any> {
            console.log(e)
            this.ShowMessage("Ocorreu um erro!", true)
            return EMPTY;
          }
          
        }
