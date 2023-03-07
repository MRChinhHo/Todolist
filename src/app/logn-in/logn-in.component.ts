import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ServerHttpService } from '../Services/server-http.service';


@Component({
  selector: 'app-logn-in',
  templateUrl: './logn-in.component.html',
  styleUrls: ['./logn-in.component.css']
})
export class LognInComponent implements OnInit {


public email=''
public password=''



public inputEmail(event:any){
  this.email=event.target.value
}
public inputPassword(event:any){
  this.password=event.target.value
}

public submitLogin(){

   this.serverHttp.getProfile().subscribe((data:any)=>{
    console.log('get',data)
    const matchedUser=data.find( (user: any) =>
   user.email===this.email.trim()&&user.password===this.password.trim()
    )
  
   if(matchedUser){
    alert('Đăng nhập thành công')
    this.router.navigate(['/home']);
   }else{
    alert('vui long nhâp đúng email hoặc password')
   }
  
     })
  
}
  constructor(private router:Router,private serverHttp:ServerHttpService) {
  }

  ngOnInit() {
    this.submitLogin()
  }

 

}