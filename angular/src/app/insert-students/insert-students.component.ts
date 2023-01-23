import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'


@Component({
  selector: 'app-insert-students',
  templateUrl: './insert-students.component.html',
  styleUrls: ['./insert-students.component.css']
})
export class InsertStudentsComponent implements OnInit{
  constructor(private student:StudentService, private router:Router){}

  FirstName:String=""
  LastName:String=""
  BirthDate:String=""
  Email:String=""
  Password:String=""
  Phonenumber:String=""
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
    this.student.createStudent({FirstName:this.FirstName, LastName:this.LastName, BirthDate:this.BirthDate, Email:this.Email, Phonenumber:this.Phonenumber, Password:this.Password}).pipe().subscribe((data)=>{
      console.log(data);
      this.Data = data
      if (this.Data.error) {
        console.log(this.Data.error);
      } else {
        alert("Student is created succesfully")
        this.router.navigate(['administratamain'])
      }
    })
  }

}
