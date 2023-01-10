import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

  getClass(body:any){
    return this.http.post(("http://localhost:4000/api/class/"), body)
  }
}

