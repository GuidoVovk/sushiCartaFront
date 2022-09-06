import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carta } from '../Modelo/carta';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  URL = 'http://localhost:8080/menu/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Carta[]>{
    return this.httpClient.get<Carta[]>(this.URL + 'lista');
  }

  public save(carta: Carta):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', carta);
  }

  public detail(id: number):Observable<Carta>{
    return this.httpClient.get<Carta>(this.URL + `detail/${id}`);
  }

  public update(id: number, carta: Carta):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, carta);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
