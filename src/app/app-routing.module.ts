import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [

  { path: "add-item", component: AddItemsComponent },
  { path: "", component: HomeComponent },
  { path: "items/:id", component: ItemListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
