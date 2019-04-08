import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import {Router} from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username ="obed"
  password=''
  errorMessage ='Invalid Password/Username'
  invalidLogin = false

  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){

    // console.log(this.username);
   //if(this.username==="obed" && this.password==='obed'){
    if(this.authentication.authennticate(this.username, this.password) ) {
  
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else{
      this.invalidLogin = true
    }
    
  }

}
