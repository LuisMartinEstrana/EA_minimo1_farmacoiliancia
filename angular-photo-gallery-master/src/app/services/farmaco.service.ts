import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Farmaco } from '../interfaces/Farmaco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmacoService {

  URI = 'http://localhost:4000/api/farmaco';

  constructor(private http: HttpClient) { }

  getFarmaco() {
    return this.http.get<Farmaco[]>(this.URI);
  }

  createFarmaco(unidad: string, descripcion: string, telefono: string): Observable<any> {
    const headers = {'content-type':'application/json'};
    const farmaco = {'unidad': unidad, 'descripcion': descripcion, 'telefono': telefono};
    const body = JSON.stringify(farmaco)

    console.log(body)

    return this.http.post(this.URI, body, {'headers': headers})
  }

  deleteFarmaco(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }
}
