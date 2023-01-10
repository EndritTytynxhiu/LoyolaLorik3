import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'
import { ClassService } from '../service/class.service';

@Component({
  selector: 'app-teacher-class',
  templateUrl: './teacher-class.component.html',
  styleUrls: ['./teacher-class.component.css']
})
export class TeacherClassComponent implements OnInit {
  constructor( private router:Router, private tclass:ClassService){}

  token:any=localStorage.getItem('token')
  decode:any
  class:any
  ngOnInit(): void {
    this.decode = jwt_decode(this.token, )
    console.log(this.decode.result);
    if(this.decode.result.Role_id != 2){
      this.router.navigate(['login'])
    }

    this.tclass.getClass({id:this.decode.result.id}).subscribe((data)=>{
      this.class=data
      console.log(this.class);
    })
  }

  Test(klas:any){
    localStorage.setItem('Class_id', klas)
    console.log(localStorage.getItem("Class_id"));
    this.router.navigate(['profatTest'])
  }
}
