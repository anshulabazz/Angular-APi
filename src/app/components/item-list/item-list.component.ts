import { Component, OnInit, Input } from '@angular/core';
import {  ActivatedRoute, Router, } from '@angular/router';
import { Item } from '../../models/item.model';
import { ItemService } from '../../service/item.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() viewmode = false
  @Input() currentitem: Item = {
    name: '',
    description: '',
    price: '',
    category: '',
    _id: '',
  }
  constructor(public service: ItemService, public router: Router, public route: ActivatedRoute) { }
  message!:''
  ngOnInit() {
    if (!this.viewmode) {
      this.get(this.route.snapshot.params["id"])
      this.message=''
    }
    
  }
  get(id: any) {
    this.service.getbyid(id).subscribe({
      next: (data) => {
        this.currentitem = data
        console.log(data)

      },
      error: (e)=> console.log(e)
    })

  }
  deleteitem() {
    this.service.deletebyid(this.currentitem._id).subscribe({
      next: () => {
        console.log('Data deleted')
      }})

  }
  updateitem() {
    
    this.service.upadtebyid(this.currentitem, this.currentitem._id).subscribe({
      next: (res) => {
        this.message=res.message
      }

    })

  }

}
