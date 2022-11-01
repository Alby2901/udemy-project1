import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../service/recipe.service";
@Component({
    selector: 'app-recipedetail',
    templateUrl: './recipedetail.component.html',
    styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit{

  // rcpSelec: Recipe

  @Input() rcpSelec: Recipe;

  isOpen: boolean = false;
  isOpenComp2: boolean;

  constructor(private recipeService: RecipeService){}
  //constructor(private slService: ShoppingListService){}
  //constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    // this.recipeservice.rcpSel.subscribe(
    //   (recipe: Recipe) => {this.rcpSelec = recipe})
  }

  onSendToShLst(){
    this.recipeService.addIngredientsToShoppingList(this.rcpSelec.ingredients);

  }

}

