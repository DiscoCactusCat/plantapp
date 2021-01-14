import { Injectable } from '@angular/core';


export interface Plant {
  id: number;
  name: string;
  latinName: string;
  description: string;
  photoUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor() { }

  private plants: Plant[] = [
    {
      id: 0,
      name: "Monstera deliciosa",
      latinName: "",
      description: "Monstera description",
      photoUrl: "../../assets/plants-photos/monstera.jpg",
    },
    {
      id: 10,
      name: "Spathiphyllum",
      latinName: "",
      description: "spathiphyllum description",
      photoUrl: "../../assets/plants-photos/spathiphyllum2.jpg",
    },
    {
      id: 2,
      name: "Caoutchouc",
      latinName: "Ficus elastica",
      description: "Un simple caoutchouc, bien robuste",
      photoUrl: "../../assets/plants-photos/caoutchouc.jpg",
    }
  ];

  public getPlants(): Plant[]{
    return this.plants;
  }

  public getPlantById(id: number): Plant{
    let plantId = this.plants.findIndex(plant => plant.id == id);
    return this.plants[plantId];
  }
}
