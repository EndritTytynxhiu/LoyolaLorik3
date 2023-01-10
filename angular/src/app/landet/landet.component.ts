import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-landet',
  templateUrl: './landet.component.html',
  styleUrls: ['./landet.component.css']
})

export class LandetComponent implements OnInit {

  constructor( private router:Router){}
  
  token:any=localStorage.getItem('token')
  decode:any
  ngOnInit(): void {
    this.decode = jwt_decode(this.token, )
    console.log(this.decode.result);
    if(this.decode.result.Role_id != 1){
      this.router.navigate(['login'])
    }
  }

  Landa(landa:string){
    localStorage.setItem("landa",landa)
    console.log(localStorage.getItem('landa'))
    this.router.navigate(['test'])
  }


}
