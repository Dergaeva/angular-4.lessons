import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
    <div class="col-md-8 col-md-offset-2">
    <h1> {{ asyncTitle | async}}</h1>
    <input type="text" class="form-control" [(ngModel)] = 'searchCar'>
    <button class="btn btn-dark" (click) = "addCar()">Добавить</button>
    <hr>
    <ul class="list-group">
    <li 
        class="list-group-item"
        *ngFor = "let car of cars | carFilter: searchCar:'name'; let i = index"
        ><b>{{ i+1 }}</b> {{car.name}} <i>{{ car.descr}}</i>      
    </li>
    </ul>
    <hr>
    <br>
      <h2> {{ name }}</h2>
      <h2> {{ name | lowercase }}</h2>
      <h2> {{ name | uppercase }}</h2>
      <h2> {{ name | slice:0:3 }}</h2>
      <hr>
      <h2>{{ pi }}</h2>
      <h2>{{ pi | number }}</h2>
      <h2>{{ pi | number: '1.3-4' }}</h2>
      <h2>{{ pi | number: '2.2-2' }}</h2>
      <hr>
      <h2>{{ money | currency: 'USD':true}}</h2>
      <hr>
      <h2>{{ date | date:'fullDate'}}</h2>
      <h2>{{ date | date:'shortDate'}}</h2>
      <hr>
      <h2>{{ amount}}</h2>
      <h2>{{ amount | percent}}</h2>
      <hr>
      <h2>{{ object}}</h2>
      <h2><pre>{{ object |json}}</pre></h2>
      <hr>
      <h3>{{ num | AppPow:3 }}</h3>
    </div>
  `
})
export class AppComponent {
  searchCar= "";
  num = 2;
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };
  cars = [
    {name: 'Ford', descr: 'WF 1'},
    {name: 'Mazda', descr: 'WF 2'},
    {name: 'Bently', descr: 'WF 3'},
    {name: 'Audi', descr: 'WF 4'},
    {name: 'Mercedes', descr: 'WF 1'},
    {name: 'BMW', descr: 'WF 8'}
  ];

  asyncTitle = Observable.of('Async title 3sec')
    .delay(3000);

  addCar() {
    this.cars.push({
      name: "New Car",
      descr: "WFW"
    })
  }
}
