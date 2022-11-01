import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  rcpSelTop: Recipe;

  constructor(private recipeservice: RecipeService){}

  ngOnInit(): void {
    this.recipeservice.rcpSel.subscribe(
      (recipe: Recipe) => {this.rcpSelTop = recipe}
  )}

  // onRcpSelTop(rcpRecTopParam: Recipe){
  //   this.rcpSelTop = rcpRecTopParam;
  // }

}
