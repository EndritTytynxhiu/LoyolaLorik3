import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { LandetComponent } from './landet/landet.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestetNxansComponent } from './testet-nxans/testet-nxans.component';
import { TestService } from './service/test.service';
import { TeacherClassComponent } from './teacher-class/teacher-class.component';
import { ClassService } from './service/class.service';
import { TeacherTestComponent } from './teacher-test/teacher-test.component';
import { TestInfoService } from './service/test-info.service';
import { TestInfoUpdateComponent } from './test-info-update/test-info-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UpdateDialogComponentComponent } from './update-dialog-component/update-dialog-component.component';
import { UpdateTestDialogComponent } from './update-test-dialog/update-test-dialog.component';
import { CreateTestInfoComponent } from './create-test-info/create-test-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandetComponent,
    SignUpComponent,
    TestetNxansComponent,
    TeacherClassComponent,
    TeacherTestComponent,
    TestInfoUpdateComponent,
    UpdateDialogComponentComponent,
    UpdateTestDialogComponent,
    CreateTestInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatDialogModule
  ],
  providers: [UserService, TestService, ClassService, TestInfoService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
