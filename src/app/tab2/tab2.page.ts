import { UserPlantsService } from './../services/user-plants.service';

import { PlantsService, Plant } from './../services/plants.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(
    private plantsDatabase: PlantsService,
    private userPlants: UserPlantsService) {}

  getPlants(): Plant[]{
    return this.plantsDatabase.getPlants();
  }
  ngOnInit(){
    
  }

  public testUserPlantRegistered(){
    console.log(this.userPlants.isRegistered(10));
  }
}
