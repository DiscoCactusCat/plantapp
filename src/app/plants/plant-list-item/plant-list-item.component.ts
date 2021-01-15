import { UserPlantsService } from "./../../services/user-plants.service";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Plant } from "src/app/services/plant.model";
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: "plant-list-item",
  templateUrl: "./plant-list-item.component.html",
  styleUrls: ["./plant-list-item.component.scss"],
})
export class PlantListItemComponent implements OnInit {
  @Input() plant: Plant;
  @Input() hideFavoriteButton: false;
  @ViewChild(IonItemSliding) slidingItem: IonItemSliding;

  constructor(private userPlants: UserPlantsService) {}

  ngOnInit() {
    this.getUserData();

    
  }


  public isRegistered: boolean;
  public isFavorite: boolean;
  

  public togglePlantToRegistered() {
    this.userPlants.isRegistered(this.plant.id)
      ? this.userPlants.removePlantFromRegistered(this.plant)
      : this.userPlants.addPlantToRegistered(this.plant);
      this.slidingItem.close();
  }

  public togglePlantToFavorite() {
    this.userPlants.isFavorite(this.plant.id)
      ? this.userPlants.removePlantFromFavorite(this.plant)
      : this.userPlants.addPlantToFavorite(this.plant);
      this.slidingItem.close();
  }

  public managePlantOnDrag(event: any){
    
    event.target.getSlidingRatio().then(slidingRatio => {
     
  });
    
  }

  private getUserData(){
    this.isRegistered = this.userPlants.isRegistered(this.plant.id);
    this.isFavorite = this.userPlants.isFavorite(this.plant.id);

    this.userPlants.registeredFullyRetrieved.subscribe( () => {
      this.isRegistered = this.userPlants.isRegistered(this.plant.id);
    });
    this.userPlants.favoriteFullyRetrieved.subscribe( () => {
      this.isFavorite = this.userPlants.isFavorite(this.plant.id);
    });
    this.userPlants.userPlantsUpdated.subscribe( () => {
      this.isRegistered = this.userPlants.isRegistered(this.plant.id);
      this.isFavorite = this.userPlants.isFavorite(this.plant.id);
    });
  }
}
