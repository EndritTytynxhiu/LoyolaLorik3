import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassInfoService {

  constructor(private http:HttpClient) { }

  InsertStudent(body:any){
    return this.http.post(("http://localhost:4000/api/classInfo"), body)
  }
}
