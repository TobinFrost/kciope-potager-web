import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantType } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;
  plantTypes : string[] = []
  
  constructor(private plantService: PlantService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      description : new FormControl('')
    });
    this.plantTypes = Object.values(PlantType);
   }

  ngOnInit(): void {
    
  }

  get f(){
    return this.form.controls;
  }
    

  submit(){
    this.plantService.create(this.form.value).subscribe(res => {
         console.log('Plant created successfully!');
         this.router.navigateByUrl('plant/list');
    })
  }

}
