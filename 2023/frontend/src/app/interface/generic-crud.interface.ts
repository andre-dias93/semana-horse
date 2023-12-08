export interface IGenericCrud {
  columnId?: string;
  columns: {caption: string, dataField: string}[];
  endpoint: string;
  title: string;
}
