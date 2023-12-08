import {Component} from '@angular/core';

import {Product} from "../../model/product.model";

import {IGenericCrud} from "../../interface/generic-crud.interface";

@Component({
  selector: 'app-product',
  template: `
    <app-generic-crud [(object)]="product" [genericCrud]="genericCrud">
      <div class="row">
        <div class="col-md-8">
          <mat-form-field class="mat-form">
            <mat-label>Nome</mat-label>
            <input matInput [(ngModel)]="product.name">
          </mat-form-field>
        </div>
        <div class="col-md-4">
          <mat-form-field class="mat-form">
            <mat-label>Preço</mat-label>
            <input matInput [(ngModel)]="product.price">
          </mat-form-field>
        </div>
      </div>
    </app-generic-crud>
  `
})
export class ProductComponent {

  genericCrud: IGenericCrud;

  product: Product = new Product();

  constructor() {
    this.genericCrud = {
      title: 'Produto', endpoint: 'products',
      columns: [
        {caption: 'Id', dataField: 'id'},
        {caption: 'Name', dataField: 'name'},
        {caption: 'Price', dataField: 'price'}
      ]
    }
  }

}
