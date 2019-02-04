import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// rxjs
import { Observable } from "rxjs/Observable";

@Injectable()
export class CarsService {

  constructor(private HttpClient: HttpClient) { };


  getAppTitle()  {
    return this.HttpClient.get('http://localhost:3000/title')
      .delay(3000)
      .map((data) => data.value)
      ;
  }

  getCars(): Observable<any> {
    const headers = new HttpHeaders ({
        'Content-Type': 'application/json; charset=utf8'
    });
    return this.HttpClient
      .get('http://localhost:3000/cars', {
      headers: headers
    })
      .catch((error: Response) => {
        return Observable.throw('Сервер не доступен, попробуйте позже');
      })
  };

  addCar(carName:string) {
    const data = {
      name: carName,
      color: 'blue'
    };
    const headers = new HttpHeaders ({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.HttpClient.post('http://localhost:3000/cars', data, {
      headers
    });
  }

  changeColor (car: any, color: string): Observable<any>  {
    car.color = color;
    return this.HttpClient.put(`http://localhost:3000/cars/${car.id}`, car);
  }

  deleteSomeCar(car: any): Observable<any> {
    return this.HttpClient.delete(`http://localhost:3000/cars/${car.id}`)
  }

}
