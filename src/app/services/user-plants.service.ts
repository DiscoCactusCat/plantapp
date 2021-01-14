import { Injectable, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Plant } from "./plant.model";

@Injectable({
  providedIn: "root",
})
export class UserPlantsService implements OnInit {
  constructor(
    private storage: Storage
  ) {}

  private registeredPlants: number[] = [];
  private favoritePlants: number[] = [];

  ngOnInit(): void {
    this.retrieveRegisteredPlantsFromStorage();
    this.retrieveFavoritePlantsFromStorage();
  }

  // SERVICE FUNCTIONS
  // Registered Plants
  public getRegisteredPlantsId(): number[] {
    return this.registeredPlants;
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
  }

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
