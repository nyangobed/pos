// package com.hezRono.springboot.web
//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { AuthenticationService } from '../service/authentication.service';


// @ComponentScan(value ="com.hezRono.springboot.web")

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBoot implements someInterface
export class WelcomeComponent implements OnInit {
  name =''
  welcomeMessageFromService: string
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService,
    private authentication: AuthenticationService) { }

  ngOnInit() {
   // console.log( this.route.snapshot.params['name'])
   this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
     response => this.handleSuccessfulResponse(response),
     error => this.handleErrorResponse(error)
    );
    //console.log('last line of getWelcomeMessage')
    // console.log("get welcome message")
  }
  getWelcomeMessageWithParameter(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPath(this.name).subscribe(
     response => this.handleSuccessfulResponse(response),
     error => this.handleErrorResponse(error)
    );
    //console.log('last line of getWelcomeMessage')
    // console.log("get welcome message")
  }
  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response)
    //console.log(response.message);
  }
  handleErrorResponse(error){
   // console.log(error);
   // console.log(error.error);
   // console.log(error.error.message)
    this.welcomeMessageFromService = error.error.message
  }

}
