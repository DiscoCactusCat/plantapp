import { Injectable } from '@angular/core';
import { Plant } from './plant.model';



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
      description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec a eros vitae diam sodales vestibulum. Pellentesque nec urna fringilla, scelerisque diam et, aliquam nibh. Aliquam erat volutpat. Proin venenatis pulvinar metus quis egestas. In sodales nibh vitae odio rutrum aliquet. Curabitur vel sodales magna. Praesent scelerisque posuere tristique. Sed ut nibh ac dui vehicula sollicitudin. Quisque ante leo, rutrum eget nisl non, mattis aliquet ex. Phasellus in erat commodo, tincidunt felis at, rhoncus justo. In quis enim ut sem faucibus varius ut non lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
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
