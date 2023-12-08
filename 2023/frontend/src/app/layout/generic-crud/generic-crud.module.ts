import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";

import {GenericCrudComponent} from './generic-crud.component';

@NgModule({
  declarations: [
    GenericCrudComponent
  ],
  exports: [
    GenericCrudComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class GenericCrudModule {
}
