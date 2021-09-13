import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup;

  car: Car;
  user: User;
  customer: Customer;
  customers: Customer[] = [];
  carId: number;
  

  constructor(
    private carService: CarService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
        let currentUserId = parseInt(this.localStorageService.getCurrentUserId(),10);
        this.getCustomerByUserId(currentUserId);
        this.createRentalAddForm();
      }
    });
  }

  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      rentDate : ["",Validators.required],
      returnDate : ["",Validators.required],
    })
  }

  getCarDetailsById(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((response) => {
      this.car = response.data[0];
      console.log(response.data);
    });
  }

  getCustomerByUserId(userId:number) {
    this.customerService.getCustomerByUserId(userId).subscribe((response) => {
        this.customer = response.data;
        console.log(response.data)
      });
  }

}
