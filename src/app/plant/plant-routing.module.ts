import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {ListComponent} from './list/list.component'
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: "plant", redirectTo: "plant/list",pathMatch: 'full'},
  { path: "plant/list", component: ListComponent},
  { path: "plant/:plantId/view", component: ViewComponent},
  { path: "plant/add", component: AddComponent},
  { path: "plant/:plantId/edit", component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
