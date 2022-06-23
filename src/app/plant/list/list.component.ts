import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  plants: Plant[] = [];
  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.loadPlants();
  }

  deletePlant(id:string){
    this.plantService.delete(id).subscribe(res => {
         this.plants = this.plants.filter(item => item.id !== id);
         console.log('Plant deleted successfully!');
    })
  }

  onTypeSeleted($event: any) {
    const plant_type = $event.target.value;
    this.loadPlants(plant_type);
  }

  loadPlants(type?: string){
    this.plantService.getAll(type).subscribe(result => {
      this.plants = result.data;
    })
  }

}
