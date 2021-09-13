import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carImage.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carImages: CarImage[];
  cars: Car[];
  currentImage: CarImage;

  defaultPath = 'https://localhost:44324';

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarsByCarId(params['carId']),
          this.getCarImages(params['carId']);
      }
    });
  }

  getCarsByCarId(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarImages(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      console.log(response);
    });
  }

  getPath() {
    return this.defaultPath;
  }

  getButtonClass(image: CarImage) {
    if ((image = this.carImages[0])) {
      return 'active';
    } else {
      return '';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCurrentImageClass(image: CarImage) {
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }
}
