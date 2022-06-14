import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentindex=-1;
  title = '';
  item!: Item[];
  currentitem: Item = {
    name: '',
    description: '',
    price: '',
    category: '',
    _id: '',


  }


  constructor(public service: ItemService) { }

  ngOnInit(){
    this.get()
    
  }
  get() {
    this.service.getAll().subscribe({
      next: (data) => {
        this.item = data
        console.log(this.item)

      }})
  }
  clickitem(item: any, i: any) {
    
    this.currentindex = i
    this.currentitem=item

  }
  deleteitem() {
    this.service.deleteall().subscribe({ next: () => { console.log('data delete' )} })
  }

  searchitem() {
    console.log(this.title)
  }
}
