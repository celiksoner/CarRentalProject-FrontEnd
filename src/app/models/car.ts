import { CarImage } from "./carImage";

export interface Car{
    carId:number,
    colorId:number,
    brandId:number,
    modelName:string,
    brandName:string,
    colorName:string,
    dailyPrice:number,
    modelYear:number,
    description:string,
    imagePath:string[],
    carImage:CarImage[]
}