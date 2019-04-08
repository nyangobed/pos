import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { $ } from 'protractor';

export class HelloWorldBean{
 constructor(public message:string){

 }
}
@Injectable({
 providedIn: 'root'
})
export class WelcomeDataService {

 constructor(
   private http:HttpClient
 ) { }

 executeHelloWorldBeanService(){
  return this.http.get<HelloWorldBean>('http://localhost:8080/world-bean')
   // console.log("Execute Hello World Bean Service")
 }
//  http://localhost:8080/world-/path-variable/hezekiah


executeHelloWorldServiceWithPath(name){
 let basicAuthHeaderString = this.createBasicAuthenticationHeader();
 let headers = new HttpHeaders({
   Authorization: basicAuthHeaderString
 }

 )
 return this.http.get<HelloWorldBean>(`http://localhost:8080/world-/path-variable/${name}`,{headers  });
  // console.log("Execute Hello World Bean Service")
}
createBasicAuthenticationHeader(){
  let username = 'obed'
  let password = 'obed'
  let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':'+ password);
  return basicAuthHeaderString;
}
}