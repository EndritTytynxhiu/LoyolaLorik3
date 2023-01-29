import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentService } from '../service/student.service';
import { ClassInfoService } from '../service/class-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-student-class',
  templateUrl: './insert-student-class.component.html',
  styleUrls: ['./insert-student-class.component.css']
})
export class InsertStudentClassComponent implements OnInit{
  constructor(private student:StudentService, private classInfo:ClassInfoService, private router:Router){}
  Nxenesit:any
  filterText: string = ""
  id:string = ""
  class:string = ""
  Data:any

  ngOnInit(): void {
    this.student.getAllStudents().pipe().subscribe(data=>{
      this.Nxenesit = data
      console.log(this.Nxenesit);
      
    })    
  }
  
  submit(student:any){
    this.id = student.id
  }

  Insert(){
    this.classInfo.InsertStudent({Student_id:this.id, Class:this.class}).pipe().subscribe((data)=>{
      console.log(data);
      this.Data = data
      if (this.Data.succes == "Succes") {
        this.router.navigate(['administratamain'])
      }else{
        alert("Nxenesi nuk u insertua")
      }
    })
  }
}
