import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';
import { TestInfoService } from '../service/test-info.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponentComponent } from '../update-dialog-component/update-dialog-component.component';
import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';

@Component({
  selector: 'app-test-info-update',
  templateUrl: './test-info-update.component.html',
  styleUrls: ['./test-info-update.component.css']
})
export class TestInfoUpdateComponent implements OnInit {

  constructor( private router:Router, private testInfo:TestInfoService, public dialog:MatDialog){}

  dialogRef: any
  token:any=localStorage.getItem('token')
  decode:any
  id:any=localStorage.getItem('Testid')
  test:any
  Notat:any
  id1:number=0
  index:number=0
  datat:any
  ngOnInit(): void {
    this.decode = jwt_decode(this.token, )
    console.log(this.decode.result);
    if(this.decode.result.Role_id != 2){
      this.router.navigate(['login'])
    }

    this.testInfo.getTestInfo({id:this.id}).subscribe((data)=>{
      this.test = data
      console.log(this.test);
      
    })
  }

  openPopup(id1:number, index:number){
    let dialogRef = this.dialog.open(UpdateDialogComponentComponent, {
      width:'250px',
      height:'25%',
      data:{Nota:this.Notat,}
    })
    
    dialogRef.afterClosed().subscribe(res => {
      this.Notat = res
      console.log(res);
      this.testInfo.updateTestInfo({id:id1, Nota:this.Notat}).subscribe((data)=>{
        this.datat = data
        console.log(data);
        console.log(this.datat);
        
        if (this.datat.error == 'Nota nuk ekziston') {
          alert(this.datat.error)
        }
        if (this.datat.succes){
          console.log('test');
          this.test.data[index].Nota = this.Notat
        }})
      
      
    })
    
  }
}
