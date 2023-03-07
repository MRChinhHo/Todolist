import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
constructor(){}
ngOnInit(): void {
}
enteredSerchValue:string='';
@Output()
searchTextChanged:EventEmitter<string>=new EventEmitter<string>()

onSearchTextChange(){
  this.searchTextChanged.emit(this.enteredSerchValue)
}
}
