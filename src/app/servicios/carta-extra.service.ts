import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaExtra } from '../Modelo/cartaExtra';

@Injectable({
  providedIn: 'root'
})
export class CartaExtraService {
  URL = 'http://localhost:8080/menuExtra/'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<CartaExtra[]>{
    return this.httpClient.get<CartaExtra[]>(this.URL + 'lista');
  }

  public save(cartaExtra: CartaExtra):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', cartaExtra);
  }

  public detail(id: number):Observable<CartaExtra>{
    return this.httpClient.get<CartaExtra>(this.URL + `detail/${id}`);
  }

  public update(id: number, cartaExtra: CartaExtra):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, cartaExtra);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
