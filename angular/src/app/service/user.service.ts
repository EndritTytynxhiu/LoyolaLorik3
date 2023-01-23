import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(body: any){
    return this.http.post(("http://localhost:4000/api/users/login"), body)
  }

  signUp(body: any){
    console.log(body);
    
    return this.http.post(("http://localhost:4000/api/users/signUp"), body)
  }

  teacher(body:any){
    return this.http.post("http://localhost:4000/api/users", body)
  }
}
