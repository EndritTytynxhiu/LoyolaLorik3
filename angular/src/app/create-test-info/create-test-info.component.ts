import { Component, OnInit } from '@angular/core';
import { TestInfoService } from '../service/test-info.service';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'


@Component({
  selector: 'app-create-test-info',
  templateUrl: './create-test-info.component.html',
  styleUrls: ['./create-test-info.component.css']
})
export class CreateTestInfoComponent implements OnInit {
  constructor(private testInfo:TestInfoService, private student:StudentService, private router:Router){}

  students:any
  token:any=localStorage.getItem('token')
  decode:any
  class:any=localStorage.getItem('Class_id')
  test_id:any=localStorage.getItem('test_id')
  Nota:number[]=[]
  stu:string[]=[]
  j:number=0
  data:any

  ngOnInit(): void {
    this.decode = jwt_decode(this.token, )
    console.log(this.decode.result);
    if(this.decode.result.Role_id != 2){
      this.router.navigate(['login'])
    }

    this.student.getStudentClass(this.class).subscribe((data)=>{
      this.students = data
      console.log(this.students.data);
      console.log(data);
      for(let x of this.students.data){
        this.stu.push(x.id)
      }
    console.log(this.stu)
    })

    
    console.log(this.Nota);
    
    
  }

  create(){
    this.testInfo.createTestInfo({id:this.test_id, studentarr:this.stu, Nota_arr:this.Nota}).subscribe((data)=>{
      console.log(data);
      this.data = data
      if(this.data.sucess == "Succes"){
        this.router.navigate(['profatTest'])
      }else{
        alert(this.data.error)
      }
    })
  }


}
