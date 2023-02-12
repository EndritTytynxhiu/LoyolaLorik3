import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'
import { VitiShkollorService } from '../service/viti-shkollor.service';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';

@Component({
  selector: 'app-administrata-main',
  templateUrl: './administrata-main.component.html',
  styleUrls: ['./administrata-main.component.css']
})
export class AdministrataMainComponent implements OnInit {
  token:any=localStorage.getItem('token')
  decode:any
  Viti:any
  Data:any
  constructor( private router:Router, private vitishkollor:VitiShkollorService){}

  ngOnInit(): void {
    this.decode = jwt_decode(this.token, )
    console.log(this.decode.result);
    if(this.decode.result.Role_id != 3){
      this.router.navigate(['login'])
    }
  }
  ndryshoVitin() {
    this.vitishkollor.VitiIRi({viti:this.Viti}).pipe().subscribe(data => {
      this.Data = data
      if(this.Data.succes == "Succesfull"){
        alert("Viti u ndrua me sukses")
      } else {
        alert("Viti nuk u nderrua")
      }
    })
  }
}
