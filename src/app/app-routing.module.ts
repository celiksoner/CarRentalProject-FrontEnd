import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarAddComponent } from './components/car/car-add/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarListComponent } from './components/car/car-list/car-list.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars/brand/:brandName/color/:colorName",component: CarComponent},
  {path:"cars",component:CarComponent},
  {path:"carlist",component:CarListComponent},
  {path:"car-detail",component:CarDetailComponent},
  {path:"cars/car-detail/:carId",component:CarDetailComponent},
  {path:"cars/brand/:brandName",component:CarComponent},
  {path:"cars/color/:colorName",component:CarComponent},
  {path:"customers",component:CustomerComponent},
  {path:"rentals",component:RentalComponent},
  {path:"rentalDetails",component:RentalDetailComponent},
  {path:"cars/add",component:CarAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
