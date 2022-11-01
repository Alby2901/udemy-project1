import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatos', 10)
  ];

  // ingredient = new EventEmitter<Ingredient>

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredientRec:Ingredient){
    console.log('Ingr.Rec: ', ingredientRec)
    this.ingredients.push(ingredientRec)
    console.log('IngrTS: ', this.ingredients)
  }

}
