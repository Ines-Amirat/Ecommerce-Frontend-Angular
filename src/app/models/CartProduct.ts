import { Cart } from "./Cart";
import { Product } from "./Product";

export  interface CartProduct{
    CartProductId : number,
    quantity: number, 
    cart : Cart,
    product: Product

}