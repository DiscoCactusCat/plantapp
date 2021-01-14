import { Plant } from "./../services/plant.model";
import { UserPlantsService } from "./../services/user-plants.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private user: UserPlantsService) {}

  public registeredPlants: Plant[] = [];

  ngOnInit() {
    this.registeredPlants = this.user.getRegisteredPlants();
    this.user.registeredFullyRetrieved.subscribe(() => {
      this.registeredPlants = this.user.getRegisteredPlants();
    });

    this.user.userPlantsUpdated.subscribe(() => {
      this.registeredPlants = this.user.getRegisteredPlants();
    });
  }

}
