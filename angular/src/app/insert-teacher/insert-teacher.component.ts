import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-insert-teacher',
  templateUrl: './insert-teacher.component.html',
  styleUrls: ['./insert-teacher.component.css']
})
export class InsertTeacherComponent implements OnInit {
  constructor(private user:UserService, private router:Router){}

  FirstName:String=""
  LastName:String=""
  Email:String=""
  Password:String=""
  Data:any
  token:any=localStorage.getItem('token')
  decode:any

  ngOnInit(): void {
    this.decode = jwt_decode(this.token, )
    console.log(this.decode.result);
    if(this.decode.result.Role_id != 3){
      this.router.navigate(['login'])
    }
  }

  Insert(){
    this.user.teacher({FirstName:this.FirstName, LastName:this.LastName, Email:this.Email, Password:this.Password}).pipe().subscribe((data)=>{
      console.log(data);
      this.Data = data
      if (this.Data.error) {
        console.log(this.Data.error);
      } else {
        alert("Teacher is created succesfully")
        this.router.navigate(['administratamain'])
      }
    })
  }
}
