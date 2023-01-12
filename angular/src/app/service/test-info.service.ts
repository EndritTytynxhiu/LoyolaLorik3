import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestInfoService {

  constructor(private http:HttpClient) { }

  getTestInfo(body:any){
    return this.http.post(("http://localhost:4000/api/testInfo/"), body)
  }

  updateTestInfo(body:any){
    return this.http.put(("http://localhost:4000/api/testInfo/"), body)
  }
}
