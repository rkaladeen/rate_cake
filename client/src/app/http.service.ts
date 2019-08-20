import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get("/cakes");
  }

  getOne(cake_id: String) {
    return this._http.get(`/cakes/${cake_id}`);
  }

  createCake(newCake: Object) {
    return this._http.post("/cakes", newCake);
  }

  updateCake(updateCake: Object) {
    return this._http.put(`/cakes/${updateCake['_id']}`, updateCake);
  }

  deleteCake(deleteCake: String) {
    return this._http.delete(`/cakes/${deleteCake}`);
  }

}
