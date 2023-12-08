import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {ProductComponent} from './product.component';
import {GenericCrudModule} from "../../layout/generic-crud/generic-crud.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'form',
    component: ProductComponent
  },
  {
    path: 'form/:id',
    component: ProductComponent
  }
];

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GenericCrudModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProductModule {
}
