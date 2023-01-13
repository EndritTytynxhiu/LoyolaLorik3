import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'
import { TestService } from '../service/test.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTestDialogComponent } from '../update-test-dialog/update-test-dialog.component';

@Component({
  selector: 'app-teacher-test',
  templateUrl: './teacher-test.component.html',
  styleUrls: ['./teacher-test.component.css']
})
export class TeacherTestComponent {
  constructor( private router:Router, private test:TestService, public dialog:MatDialog){}

  token:any=localStorage.getItem('token')
  decode:any
  class:any=localStorage.getItem('Class_id')
  testi:any
  Nota:any
  Data:any
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

  Delete(id:any){
    console.log(id);
  }

  Update(id:any, index:any){
    let dialogRef = this.dialog.open(UpdateTestDialogComponent, {
      width:'250px',
      height:'25%',
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      console.log({id:id, Name:res.name, Periudha:res.periudha});
      this.test.updateTest({id:id, Name:res.name, Periudha:res.periudha}).subscribe((data)=>{
        this.Data = data
        if (this.Data.succes == 'Succes') {
          this.testi.data[index].Name = res.name
          this.testi.data[index].Periudha = res.periudha
        }
      })})
  }
}
