import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { AddUserService } from './services/add-user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AddUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
