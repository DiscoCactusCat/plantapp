import { PlantsService } from './plants.service';
import { EventEmitter, Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Plant } from "./plant.model";

@Injectable({
  providedIn: "root",
})
export class UserPlantsService{
  constructor(
    private storage: Storage,
    private plantsDatabase: PlantsService
  ) {
    this.retrieveRegisteredPlantsFromStorage();
    this.retrieveFavoritePlantsFromStorage();
    console.log("Fin contsructor service User", this.registeredPlants);
  }

  private registeredPlants: number[] = [];
  private favoritePlants: number[] = [];

  public storageFullyRetrieved = new EventEmitter();

  // SERVICE FUNCTIONS
  // Registered Plants
  public getRegisteredPlantsId(): number[] {
    return this.registeredPlants;
  }

  public getRegisteredPlants(): Plant[]{
    var plantsList = [];
    this.getRegisteredPlantsId().forEach( id => {
      plantsList.push(this.plantsDatabase.getPlantById(id));
    });
    return plantsList;
  }

  public addPlantToRegistered(plant: Plant) {
    if (!this.isRegistered(plant.id)) {
      this.registeredPlants.push(plant.id);
      this.refreshStorage();
    }
   
    
  }

  public removePlantFromRegistered(plant: Plant) {
    if (this.isRegistered(plant.id)) {
      this.registeredPlants.splice(plant.id, 1);    
      this.refreshStorage();
    }
  }

  public isRegistered(plantId: number): boolean {
    return this.registeredPlants.findIndex((id) => id == plantId) === -1
      ? false
      : true;
  }

  

  // Favorite Plants
  public getFavoritePlantsId(): number[] {
    return this.favoritePlants;
  }

  public addPlantToFavorite(plant: Plant) {
    if (!this.isFavorite(plant.id)) {
      this.favoritePlants.push(plant.id);
      this.refreshStorage();
    }
  }

  public removePlantFromFavorite(plant: Plant) {
    if (this.isFavorite(plant.id)) {
      this.favoritePlants.splice(plant.id, 1);    
      this.refreshStorage();
    }
    
  }

  public isFavorite(plantId: number) {
    return this.favoritePlants.findIndex((id) => id == plantId) === -1
      ? false
      : true;
  }

  // STORAGE
  // Get back the user registered plants list
  private async retrieveRegisteredPlantsFromStorage() {
    const data = await this.storage.get("userRegisteredPlants");
    this.registeredPlants = data ?? [];
    this.storageFullyRetrieved.emit();
    console.log("Plants registered in Storage", this.registeredPlants);
  }

  // Storage retrieved event

  // Get back the user favorite plants list
  private async retrieveFavoritePlantsFromStorage() {
    const data = await this.storage.get("userFavoritePlants");
    this.favoritePlants = data ?? [];
  }

  private refreshStorage() {
    this.storage.set("userRegisteredPlants", this.registeredPlants);
    this.storage.set("userFavoritePlants", this.favoritePlants);
  }

  

  
}
