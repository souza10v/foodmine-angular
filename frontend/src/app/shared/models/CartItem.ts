import { Food } from "./Food";

export class CartItem{

    constructor(public food:Food) { //assesible outside
    }

    quantity: number = 1;
    price: number = this.food.price
}