import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  FirstName:String=""
  LastName:String=""
  Email:String=""
  Password:String=""
  Student_id:number=0
  Student_password:String=""
  data:any

  constructor(private user:UserService,
    private router:Router){}

  signUp(){
    console.log({FirstName:this.FirstName, LastName:this.LastName, Email:this.Email, password:this.Password, Student_id:this.Student_id,Student_password:this.Student_password});
    
    this.user.signUp({FirstName:this.FirstName, LastName:this.LastName, Email:this.Email, password:this.Password, Student_id:this.Student_id,Student_password:this.Student_password}).subscribe((data)=>{
      console.log(data);
      this.data = data
      if(this.data.succes == "Succesfull"){
        localStorage.setItem("token",this.data.token)
        this.router.navigate(["lendet"])
      }else{
        console.log(this.data.error);
        alert(this.data.error)
      }
    })
  }
}
    