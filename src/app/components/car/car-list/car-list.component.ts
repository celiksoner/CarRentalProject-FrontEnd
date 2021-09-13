import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarNormal } from 'src/app/models/carNormal';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars:Car[];
  car:Car;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }


  getCars(){
    this.carService.getCarDetails().subscribe(response => {
      this.cars = response.data;
    })
  }

  deleteCar(car:Car){
    this.carService.delete(car).subscribe( response => {
      this.car = response.data;
      this.getCars();
    })
  }
}
