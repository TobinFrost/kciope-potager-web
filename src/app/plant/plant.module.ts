import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantRoutingModule } from './plant-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PlantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PlantModule { }
