import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shoppinglist/service/shopping-list.service';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
  rcpSel = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Spaghetti alla matriciana',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      'https://media.istockphoto.com/photos/bucatini-allamatriciana-wikipedia-the-free-encyclopedia-picture-id1264712750?s=612x612',
      [
        new Ingredient('Pasta', 100),
        new Ingredient('Uova', 2),
        new Ingredient('Guanciale', 50)
      ]),
    new Recipe('Risotto alla milanese',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'https://media.istockphoto.com/photos/risotto-picture-id509486128?k=20&m=509486128&s=612x612&w=0&h=pkvM-GnAG0rLEZeqLisj-9VHvtlLVuYM4AKdbdsHX1M=',
      [
        new Ingredient('Riso', 100),
        new Ingredient('Zafferano', 3),
        new Ingredient('Burro', 50)
      ]
      )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)

  }

}
