import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adicional } from '../Modelo/adicional';

@Injectable({
  providedIn: 'root'
})
export class AdicionalService {
  URL = 'http://localhost:8080/adicional/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Adicional[]>{
    return this.httpClient.get<Adicional[]>(this.URL + 'lista');
  }

  public save(adicional: Adicional):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', adicional);
  }

  public detail(id: number):Observable<Adicional>{
    return this.httpClient.get<Adicional>(this.URL + `detail/${id}`);
  }

  public update(id: number, adicional: Adicional):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, adicional);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }


}
