import { Component, OnInit } from '@angular/core';

import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 //khai báo kiểm dự liệu mới push được

 public addlist='';
 public valid=true;
 public size:string[]=['','None','Short','TwoPeople','ThirtPeople','Fullsize']
 public selectedSize ='';
 public pushList: { namelist: string, list: string }[] = [];
 public item:any
 public valueInSelect: any;
 public posts=[{}]
//láy dữ liệu từ option
public selectSize(event:any){
  console.log('Sizepush',event.target.value)
  this.selectedSize=event.target.value
}
// khi ta chạy onClick trả lại mảng tróng ban đầu
public setForm(){
  this.addlist=''
 
 
}
//xóa mảng
public deleteList(item: { namelist: string, list: string }){
  //xét mảng
  const index=this.pushList.indexOf(item)
  if (index >= 0) {
    this.pushList.splice(index, 1);
    this.valid=false
  }
}
//sửa lại sự kiện
public editlist(item: { namelist: string, list: string }){
  //láy sự kiện con
  const index=this.pushList.indexOf(item)
  this.addlist=this.pushList[index].namelist;
  this.selectedSize=this.pushList[index].list;
 
console.log('addedit',this.addlist,'sizeedit',this.selectedSize)
  //xóa sự kiện cũ
 if( this.addlist&&this.selectedSize){
  this.pushList.splice(index, 1);
 }
 this.valueInSelect = this.selectedSize;
}
public onClick(){
  if(this.addlist && this.selectedSize){
    this.pushList.push({namelist: this.addlist, list: this.selectedSize});
    if(this.pushList){
      this.serverHttp.addList(
        {namelist: this.addlist, list: this.selectedSize}
        ).subscribe((data:any)=>{
        this.posts.push(data)
        console.log('post',this.posts)
      this.valid=false
      this.setForm();
    })
   
  }
  console.log(this.pushList)
}
}
ngOnInit(): void {}
constructor( private serverHttp:ServerHttpService) {}

}