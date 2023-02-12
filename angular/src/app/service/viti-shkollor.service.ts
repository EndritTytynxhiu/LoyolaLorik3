
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VitiShkollorService {

  constructor(private http:HttpClient) { }

  VitiIRi(body:any){
    return this.http.post(("http://localhost:4000/api/VitiShkollor"), body)
  }
}