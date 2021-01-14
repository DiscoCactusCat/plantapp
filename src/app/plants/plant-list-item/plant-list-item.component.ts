import { Plant } from './../../services/plants.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'plant-list-item',
  templateUrl: './plant-list-item.component.html',
  styleUrls: ['./plant-list-item.component.scss'],
})
export class PlantListItemComponent implements OnInit {

  @Input() plant: Plant;

  constructor() { }

  ngOnInit() {}

}
