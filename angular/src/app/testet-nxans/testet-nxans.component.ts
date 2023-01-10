import { Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import jwt_decode from 'jwt-decode'
import { TestService } from '../service/test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-testet-nxans',
  templateUrl: './testet-nxans.component.html',
  styleUrls: ['./testet-nxans.component.css']
})
export class TestetNxansComponent implements OnInit{

  constructor(private test:TestService ,private router:Router){}
   
  token:any=localStorage.getItem('token')
  decode:any=jwt_decode(this.token, )
  landa:any=localStorage.getItem("landa")
  testet:any
  testet1:any


  ngOnInit(): void {
      console.log(this.decode.result.id);
      console.log(this.landa);
      if(this.decode.result.Role_id != 1){
        this.router.navigate(['login'])
      }
      
      this.test.getTest({id:this.decode.result.id, landa:this.landa}).subscribe((data)=>{
        this.testet = data
        console.log(this.testet.data);
        this.testet1 = this.testet.data
      })

      for (let j of this.testet1) {
        console.log(j);
        
      }
  }
}
