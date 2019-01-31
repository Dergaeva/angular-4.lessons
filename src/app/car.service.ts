import { Injectable } from '@angular/core';
import {ConsoleService} from "./console.service";

@Injectable()
export class CarService {

  constructor(private consoleService: ConsoleService){}

  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  addCar(name: string) {
    this.cars.push({isSold: false,name });
    this.consoleService.log(`Машина ${name} была добавлена!`)
  }



  constructor() { }
}
