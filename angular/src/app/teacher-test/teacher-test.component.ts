import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-teacher-test',
  templateUrl: './teacher-test.component.html',
  styleUrls: ['./teacher-test.component.css']
})
export class TeacherTestComponent {
  constructor( private router:Router, private test:TestService){}

  token:any=localStorage.getItem('token')
  decode:any
  class:any=localStorage.getItem('Class_id')
  testi:any
  ngOnInit(): void {
    this.decode = jwt_decode(this.token, )
    console.log(this.decode.result);
    if(this.decode.result.Role_id != 2){
      this.router.navigate(['login'])
    }

    this.test.getTeacherTest({id:this.decode.result.id, Class_id:this.class}).subscribe((data)=>{
      this.testi=data
      console.log(this.testi);
    })
  }

  UpdateTest(id:any){
    localStorage.setItem('Testid', id)
    
    this.router.navigate(["updateTest"])
  }

}
