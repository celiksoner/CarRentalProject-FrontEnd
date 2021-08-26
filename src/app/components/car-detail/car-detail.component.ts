import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];

  constructor(
    private carDetailService: CarDetailService,private activatedRoute : ActivatedRoute ) {}

  ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
          if(params["brandName"]){
            this.getCarsByBrandName(params["brandName"]);
          }else if(params["colorName"]){
            this.getCarsByColorName(params["colorName"]);
          }
          else{
            this.getCarDetails();
          }
        })
  }

  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getCarsByBrandName(brandName:string){
   this.carDetailService.getCarsByBrandName(brandName).subscribe( response => {
     this.carDetails = response.data;
   })
  }

  getCarsByColorName(colorName:string){
    this.carDetailService.getCarsByColorName(colorName).subscribe( response => {
      this.carDetails = response.data;
    })
  }

}
