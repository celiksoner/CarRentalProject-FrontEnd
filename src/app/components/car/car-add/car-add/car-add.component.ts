import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  selectedBrandId: number;
  selectedColorId: number;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands();
    this.getColors();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelName: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      console.log(carModel);
      this.carService.add(carModel).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('hatalı giriş');
    }
    this.carAddForm.clearValidators;
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getSelectedBrand(brandId: number) {
    if (this.selectedBrandId == brandId) {
      return true;
    } else {
      return false;
    }
  }

  getSelectedColor(colorId: number) {
    if (this.selectedColorId == colorId) {
      return true;
    } else {
      return false;
    }
  }
}
