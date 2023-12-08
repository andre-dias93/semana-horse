import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {environment} from "../../../environments/environment";

import {IGenericCrud} from "../../interface/generic-crud.interface";

@Component({
  selector: 'app-generic-crud',
  templateUrl: './generic-crud.component.html'
})
export class GenericCrudComponent implements OnInit {

  @Input()
  genericCrud: IGenericCrud;

  @Input()
  object: Object;

  @Output()
  objectChange: EventEmitter<Object> = new EventEmitter<Object>();

  objects: Object[];

  listMode: boolean;

  private endpoint: string;

  displayedColumns: string[];

  private url: string = environment.apiHorse;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.displayedColumns = [];
    this.genericCrud.columns.forEach(column => this.displayedColumns.push(column.dataField));
    this.displayedColumns.push('action');
    this.endpoint = `${this.url}/${this.genericCrud.endpoint}`
    this.route.url.subscribe((urlSegment: UrlSegment[]) => this.matchWithId(urlSegment));
  }

  onEdit(element: Object): void {
    this.router.navigate(['form', this.id(element)], {relativeTo: this.route});
  }

  onDelete(element: Object): void {
    this.httpClient.delete(`${this.endpoint}/${this.id(element)}`).subscribe(() => this.listAll())
  }

  onAdd(): void {
    this.router.navigate(['form'], {relativeTo: this.route});
  }

  save(): void {
    !!this.id() ?
      this.httpClient.put(`${this.endpoint}/${this.id()}`, this.object).subscribe(() => this.cancel()) :
      this.httpClient.post(this.endpoint, this.object).subscribe(() => this.cancel())
  }

  cancel(): void {
    this.router.navigate([this.router.routerState.snapshot.url.split('/form')[0]]);
  }

  private matchWithId(urlSegment: UrlSegment[]): void {
    this.listMode = !urlSegment.length;
    const id: number = Number(urlSegment[1]?.path);
    if (urlSegment[0]?.path === 'form' && Number.isInteger(id)) {
      this.httpClient.get(`${this.endpoint}/${id}`)
        .subscribe((object: Object) => {
          this.object = object;
          this.objectChange.emit(this.object);
        })
    } else {
      this.listAll();
    }
  }

  private listAll(): void {
    this.httpClient.get(this.endpoint).subscribe((objects: Object) => this.objects = objects as Object[])
  }

  private id(object: Object = this.object): number {
    return object[this.genericCrud.columnId ?? 'id'];
  }
}
