export interface FetchManyResponse<T> {
  page: number;
  pagesize:number;
  total:number;
  data: T[]
}
