import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getTest(body:any){
    return this.http.post(("http://localhost:4000/api/test/getTest"), body)
  }

  getTeacherTest(body:any){
    return this.http.post("http://localhost:4000/api/test/teacherGetTest", body)
  }
  updateTest(body:any){
    return this.http.put("http://localhost:4000/api/test/", body)

  }
}
