import { Plant } from "./../services/plant.model";
import { UserPlantsService } from "./../services/user-plants.service";
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
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

  ionViewWillEnter(){
    console.log("Hello home");
   
  }
}
