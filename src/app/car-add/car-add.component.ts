import { Component, EventEmitter } from '@angular/core';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent{

  carName = '';

  constructor(private service: CarService) {}

  addCar() {
    this.service.addCar(this.carName);
    this.carName = '';
  }

}
