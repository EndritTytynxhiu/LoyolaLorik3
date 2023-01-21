import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormControl, Validators, FormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() myInput: string|undefined;
  constructor(
    private router:Router,
    private user:UserService,
    private formBuilder: FormBuilder
  ){}

  registerForm: FormGroup | undefined;
  email:string="";
  password:string="";
  data:any
  password1:string="test"
  email2:string="test"

  emailValidation(data:any, controlName:any){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      if(control.errors){
        return
      }

      if(data.error == "Email"){
        control.setErrors({'incorrect':true})
      }
    }
  }

  passwordValidation(data:any, controlName:any){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      if(control.errors){
        return
      }

      if(data.error == "Password"){
        control.setErrors({'incorrect':true})
      }
    }
  }

  Login(){
    console.log(this.email);
    this.user.login({email:this.email, password:this.password}).subscribe((data)=>{
      console.log(data);
      this.data = data
      if (this.data.error == "Email") {
        this.email2 == ""
      }
      if (this.data.error == "Password") {
        this.password1 == ""
      }
      if(this.data.succes == "Succesfull"){
        localStorage.setItem('token', this.data.token)
        if(this.data.data.Role_id == 1){
          this.router.navigate(['lendet']);
        }if(this.data.data.Role_id == 2){
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

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
          email1: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      }, {
          validator: this.emailValidation(this.data, 'email1'),
          validator1: this.passwordValidation(this.data, 'password')
      });
  }
}
