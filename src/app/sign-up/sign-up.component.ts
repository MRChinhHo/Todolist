
import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerHttpService } from '../Services/server-http.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public name: string = '';
  public phoneNumber: number = 0;
  public email: string = '';
  public password: string = '';
  public changeEmail: string = '';
  public changePassword: string = '';
  public changeName: string = '';
  public changePhoneNumber: number = 0;
 public posts=[{}]
  public inputName(event:any){
    this.changeName=event.target.value
    
  }
  
  public inputPhoneNumber(event:any){
    this.changePhoneNumber=event.target.value
   
  }
  public inputEmail(event:any){
    this.changeEmail=event.target.value
     console.log(this.changeEmail)
  }
  public inputPassword(event:any){
    this.changePassword=event.target.value

  }

  
  public submit(form:NgForm){
   if( this.changePassword&& this.changeEmail&& this.changePhoneNumber&&this.changeName){
   const newData={
    name:this.changeName,
    phoneNumber:this.changePhoneNumber,
    email:this.changeEmail,
    password:this.changePassword,
   }
   this.serverHttp.addPosts(newData).subscribe((data)=>{
  console.log('post',data)
      this.posts.push(data)
      alert('Đăng ký thành công')
      this.router.navigate(['/logn_in']);
   form.reset()
   })
  
   } 
   
  }
  
    constructor(private router:Router, private serverHttp:ServerHttpService) {
      
  
     
    }
  
    ngOnInit() {}
    
  }
