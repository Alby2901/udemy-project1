import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Tomatos', 10)
  // ];

  ingredients: Ingredient[]

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    console.log('Ingredients: ', this.ingredients)
  }

  // onNewIngredient(ingredientRec:Ingredient){
  //   // console.log('Ingr.Rec: ', ingredientRec)
  //   // this.ingredients.push(ingredientRec)
  //   this.shoppingListService.addIngredient(ingredientRec)
  // }
}
