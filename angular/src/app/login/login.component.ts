import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router:Router,
    private user:UserService
  ){}

  email:string="";
  password:string="";
  data:any

  Login(){
    this.user.login({email:this.email, password:this.password}).subscribe((data)=>{
      console.log(data);
      this.data = data
      if(this.data.succes == "Succesfull"){
        localStorage.setItem('token', this.data.token)
        if(this.data.data.Role_id == 1){
          this.router.navigate(['lendet']);
        }if(this.data.data.Role_id == 2){
          localStorage.setItem('token', this.data.token)
          this.router.navigate(['klasat']);
        }
      } else {
        alert(this.data.error)
      }
    })
  }

  Signup(){
    this.router.navigate(['regjistrohu'])
  }
}
