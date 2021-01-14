import { Plant } from './../services/plant.model';
import { UserPlantsService } from './../services/user-plants.service';
import { PlantsService } from './../services/plants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private user: UserPlantsService) { 
   
  }


  public registeredPlants: Plant[] = [];

  ngOnInit(){    

    this.user.storageFullyRetrieved.subscribe(
      () => {
        console.log("Event fully retrieved déclenché");
        this.registeredPlants = this.user.getRegisteredPlants();}
    );
  }

  
}
