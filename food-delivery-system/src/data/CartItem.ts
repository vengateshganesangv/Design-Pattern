import { FoodItem } from './FoodItem';  // Assuming the FoodItem class is in the same directory. Adjust the path if necessary.

export class CartItem {
    private readonly foodItem: FoodItem;
    private readonly quantity: number;

    constructor(foodItem: FoodItem, quantity: number) {
        this.foodItem = foodItem;
        this.quantity = quantity;
    }

    getFoodItem(): FoodItem {
        return this.foodItem;
    }

    getQuantity(): number {
        return
