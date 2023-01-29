import { Component, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { UserService } from '../service/user.service';
import { ClassInfoService } from '../service/class-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-teacher-to-class',
  templateUrl: './insert-teacher-to-class.component.html',
  styleUrls: ['./insert-teacher-to-class.component.css']
})
export class InsertTeacherToClassComponent {
  constructor(private user:UserService, private classInfo:ClassInfoService, private router:Router){}
  Nxenesit:any
  filterText: string = ""
  id:string=""
  class:string=""
  subject:string=""
  Data:any

  ngOnInit(): void {
    this.user.getTeachers().subscribe(data=>{
      this.Nxenesit = data
      console.log(this.Nxenesit);
      
    })    
  }

  submit(student:any){
    this.id = student.id
  }

  Insert(){
    this.classInfo.InsertStudent({Student_id:this.id, Class:this.class,Subject_name:this.subject }).pipe().subscribe((data)=>{
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
