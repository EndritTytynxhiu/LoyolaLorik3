import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentClass(id:number){
    return this.http.get(`http://localhost:4000/api/student/${id}`)
  }
}
