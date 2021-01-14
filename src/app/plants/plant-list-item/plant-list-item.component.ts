import { UserPlantsService } from "./../../services/user-plants.service";
import { Component, Input, OnInit } from "@angular/core";
import { Plant } from "src/app/services/plant.model";

@Component({
  selector: "plant-list-item",
  templateUrl: "./plant-list-item.component.html",
  styleUrls: ["./plant-list-item.component.scss"],
})
export class PlantListItemComponent implements OnInit {
  @Input() plant: Plant;

  constructor(private userPlants: UserPlantsService) {}

  ngOnInit() {}

  public togglePlantToRegistered() {
    this.userPlants.isRegistered(this.plant.id)
      ? this.userPlants.removePlantFromRegistered(this.plant)
      : this.userPlants.addPlantToRegistered(this.plant);
  }

  public togglePlantToFavorite() {
    this.userPlants.isFavorite(this.plant.id)
      ? this.userPlants.removePlantFromFavorite(this.plant)
      : this.userPlants.addPlantToFavorite(this.plant);
  }
}