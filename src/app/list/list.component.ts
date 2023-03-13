import { Component, OnInit} from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public data: any=[];
  public filteredData: any=[];
  public keyword = '';
public filterValue=''
  constructor(private serverHttp: ServerHttpService) {}

  ngOnInit(): void {
    if(this.filteredData){
    this.serverHttp.getList().subscribe(data => {
      this.data = data;
      console.log(data)
    });
  }
  }
  search(e: any) {
  
    console.log(e.target.value)
    console.log(this.data)
 
  this.filterValue = e.target.value.toLowerCase();
   
console.log(this.filterValue)
//toLowerCase() chuyen doi ve chung thuong
//includes lay du lieu nhap di ss
    this.filteredData=this.data.filter((option: any) => option.namelist.toLowerCase().includes(this.filterValue));

  }
}
