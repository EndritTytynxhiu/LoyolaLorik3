import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassTeacherInfoService {

  constructor(private http:HttpClient) { }

  InsertTeacher(body:any){
    return this.http.post(("http://localhost:4000/api/classTeacherInfo"), body)
  }
}
