import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant, PlantState } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
      name: new FormControl('', [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      description : new FormControl('')
    });
  }

  ngOnInit(): void {
    this.current_id = this.route.snapshot.params['plantId'];
    this.plantStates = Object.values(PlantState);
    this.plantService.find(this.current_id).subscribe(res=>{
      this.plant = res.data;
      this.form.patchValue({
        name : this.plant.name,
        state : this.plant.state,
        description : this.plant.description
      })
    });
  }

  get f(){
    return this.form.controls;
  }
    

  submit(){
    const plant = {...this.plant, ...this.form.value}
    this.plantService.update(plant).subscribe(res => {
         console.log('Plant updated successfully!');
         this.router.navigateByUrl('plant/list');
    })
  }

}
