import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImage.service';
import { CarService } from 'src/app/services/car.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];

  imgUrl: string = 'https://localhost:44324/';
  defaultImage = 'default.jpg';

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandName']) {
        this.getCarsByBrandName(params['brandName']);
      } else if (params['colorName']) {
        this.getCarsByColorName(params['colorName']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrandName(brandName: string) {
    this.carService.getCarsByBrandName(brandName).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColorName(colorName: string) {
    this.carService.getCarsByColorName(colorName).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
