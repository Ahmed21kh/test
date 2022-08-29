import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginModel } from 'src/app/models/login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public confirmpass:any;
  public qrcodetext:string
   public login :LoginModel;
  collapsed:boolean=true;
  dropdown:boolean=true

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

  ngOnInit(): void {
  }

}
