import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //https://fakestoreapi.com/products

  constructor( private http:HttpClient) { }
getProduct(){
  return this.http.get("http://104.211.219.98:80/train/trains").pipe(map((res:any)=>{
return res;
  }))
}
}
