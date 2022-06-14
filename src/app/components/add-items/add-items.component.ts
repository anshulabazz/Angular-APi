import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/service/item.service'
interface Food {
  value: string
  viewValue: string;
}


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  submitted:boolean= false
  item: Item = 
    {
      name: '',
      description: '',
      price: '',
      category: '',
      _id:''
    }
  foods: Food[] = [
    {value: 'bootle',viewValue: 'bottle' },
    {value: 'mobile',viewValue: 'mobile' },
  ];


  constructor(public service: ItemService) { }

  ngOnInit(): void {
  }
  onsubmit() {
    const data = {
      name: this.item.name,
      description: this.item.description,
      price: this.item.price,
      category: this.item.category
    }
    this.service.savedata(data).subscribe({
      next: (res) => {
        console.log(res)
        this.submitted=true
      }})

  }
  addnew() {
    this.submitted = false
    this.item = {
      name: '',
      description: '',
      price: '',
      category: '',
      _id:''

    }
  }

}
