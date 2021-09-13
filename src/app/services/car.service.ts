import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { SingleResponseModel } from '../models/singleResponseModel';
import { CarNormal } from '../models/carNormal';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44324/api/';

  constructor(private httpClient: HttpClient) {}

  getCarDetails(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandName(brandName: string): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl + 'cars/getcardetailsbybrandName?brandName=' + brandName;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorName(colorName: string): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl + 'cars/getcardetailsbycolorName?colorName=' + colorName;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getimagesbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarDetailsById(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbyid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandNameAndColorName(
    brandName: string,
    colorName: string
  ): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl +
      'cars/getcarsbybrandnameandcolorname?brandName=' +
      brandName +
      '&colorName=' +
      colorName;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car:CarNormal){
      return this.httpClient.post(this.apiUrl + "cars/add",car)
  }

  delete(car:Car):Observable<SingleResponseModel<Car>>{
    return this.httpClient.post<SingleResponseModel<Car>>(this.apiUrl + "cars/delete",car);
  }
}
