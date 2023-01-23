import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-administrata-main',
  templateUrl: './administrata-main.component.html',
  styleUrls: ['./administrata-main.component.css']
})
export class AdministrataMainComponent implements OnInit {
  token:any=localStorage.getItem('token')
  decode:any
  constructor( private router:Router){}

  ngOnInit(): void {
    this.decode = jwt_decode(this.token, )
    console.log(this.decode.result);
    if(this.decode.result.Role_id != 3){
      this.router.navigate(['login'])
    }
  }
}
