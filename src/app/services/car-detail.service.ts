import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';



@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44324/api/";

  constructor(private httpClient:HttpClient) { }


  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrandName(brandName:string) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetailsbybrandName?brandName=" + brandName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColorName(colorName:string) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolorName?colorName=" + colorName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}