import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginModel } from 'src/app/models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public confirmpass:any;
  public qrcodetext:string
   public login :LoginModel;
  collapsed:boolean=true;
  dropdown:boolean=true
  title = 'myapplicatin-app';
  constructor( private rote : Router){
    this.login=new LoginModel();
  }
  goToRegist(){
    this.rote.navigate(["/register"])
  }
  goToUser(){
    this.rote.navigate(["/user"])
  }
  onSubmit(_form:NgForm){

    console.log(this.login);

    // this.User.push(this.login.email, this.login.password)

  }

  onActivate(event:any) {
     window.scroll(0,0);

    // window.scroll({
    //         top: 0,
    //         left: 0,
    //         behavior: 'smooth'
    //  });

     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)

 }
}
