import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Item } from 'src/app/models/item.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
 
  url: string = 'http://localhost:8080';

  constructor(public http: HttpClient) { }

  public savedata(data: any): Observable<any> {
    return this.http.post(this.url, data)
  }
  public getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }
  public deleteall(): Observable<any> {
     return this.http.delete(this.url)
  }
  public getbyid(id:any): Observable<any> {
    return this.http.get(this.url+"/get"+"/"+id)
  }
  public deletebyid(id: any): Observable<any> {
    return this.http.delete(this.url+"/"+id)
  }
  public upadtebyid(data:any,id: any): Observable<any> {
    return this.http.put(this.url+"/"+id,data)
  }



}


