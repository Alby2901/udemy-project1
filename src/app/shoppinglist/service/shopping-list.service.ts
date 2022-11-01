import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientChanged= new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatos', 10)
  ];

  // ingredient = new EventEmitter<Ingredient>

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredientRec:Ingredient){
    console.log('Ingr.Rec: ', ingredientRec)
    this.ingredients.push(ingredientRec)
    console.log('IngrTS: ', this.ingredients)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
    // for (let ingred of  ingredients){
    //   this.addIngredient(ingred);
    // }
    this.ingredients.push(...ingredients)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

}
