import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant, PlantState } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  current_id: string;
  plant: Plant;
  form: FormGroup;
  plantStates : string[] = [];
  constructor(
    private plantService: PlantService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.form = new FormGroup({
      state: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.plantStates = Object.values(PlantState);
    this.current_id = this.route.snapshot.params['plantId'];
    this.plantService.find(this.current_id).subscribe(res=>{
      this.plant = res.data;
      this.form.patchValue({
        state : this.plant.state
      })
    });
  }

  submit() {
    const new_state = this.form.value;
    const plant = {...this.plant, state : new_state.state }
    this.plantService.update(plant).subscribe(res => {
      console.log('Plant updated successfully!');
      this.router.navigateByUrl('plant/list');
    })
  }

  delete(){
    this.plantService.delete(this.plant.id).subscribe(res => {
      console.log('Plant deleted successfully!');
      this.router.navigateByUrl('plant/list');
    })
  }

}
