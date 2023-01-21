import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandetComponent } from './landet/landet.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestetNxansComponent } from './testet-nxans/testet-nxans.component';
import { TeacherClassComponent } from './teacher-class/teacher-class.component';
import { TeacherTestComponent } from './teacher-test/teacher-test.component';
import { TestInfoUpdateComponent } from './test-info-update/test-info-update.component';
import { CreateTestInfoComponent } from './create-test-info/create-test-info.component';
import { MatCommonModule } from '@angular/material/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:"lendet", component:LandetComponent},
  {path:"regjistrohu", component:SignUpComponent},
  {path:"test", component:TestetNxansComponent},
  {path:"klasat", component:TeacherClassComponent},
  {path:"profatTest", component:TeacherTestComponent},
  {path:"updateTest", component:TestInfoUpdateComponent},
  {path:"createTest", component:CreateTestInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatCommonModule],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
