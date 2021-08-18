import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44324/api/cars/getall";

  constructor(private httpClient:HttpClient) { }

  getCars() : Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}