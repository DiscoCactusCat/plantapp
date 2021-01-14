import { ActivatedRoute } from "@angular/router";
import { Plant, PlantsService } from "./../../services/plants.service";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-plant-detail",
  templateUrl: "./plant-detail.page.html",
  styleUrls: ["./plant-detail.page.scss"],
})
export class PlantDetailPage implements OnInit {
  constructor(
    private plantDatabase: PlantsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public plant: Plant;

  

  ngOnInit() {
    const id = this.activatedRoute.params.subscribe((params) => {
      this.plant = this.plantDatabase.getPlantById(params.plantId);
    });
  }

  
}
