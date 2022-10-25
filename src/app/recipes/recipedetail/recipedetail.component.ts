import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipedetail',
    templateUrl: './recipedetail.component.html',
    styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent {

  @Input() rcpSelec: Recipe;

  isOpen: boolean = false;
  isOpenComp2: boolean;


}

