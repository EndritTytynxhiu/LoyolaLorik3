import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { Router } from '@angular/router';
import { TestInfoService } from '../service/test-info.service';


@Component({
  selector: 'app-test-info-update',
  templateUrl: './test-info-update.component.html',
  styleUrls: ['./test-info-update.component.css']
})
export class TestInfoUpdateComponent implements OnInit {

  constructor( private router:Router, private testInfo:TestInfoService){}


  token:any=localStorage.getItem('token')
  decode:any
  id:any=localStorage.getItem('Testid')
  test:any
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
}
