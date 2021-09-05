import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter-car',
  templateUrl: './filter-car.component.html',
  styleUrls: ['./filter-car.component.css']
})
export class FilterCarComponent implements OnInit {
  brands:Brand[];
  colors:Color[];
  currentBrandName:string;
  currentColorName:string;

  constructor(private brandService:BrandService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }


  getBrands(){
    this.brandService.getBrands().subscribe( response => {
      this.brands = response.data;
    })
  }
  
  getColors(){
    this.colorService.getColors().subscribe( response => {
      this.colors = response.data;
    })
  }

  setCurrentBrand(brandName:string){
    return brandName == this.currentBrandName?true:false
    
  }

  setCurrentColor(colorName:string){
    return colorName == this.currentColorName?true:false
  }

}
