import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() rcp: Recipe;
  // @Output() rcpSel = new EventEmitter<Recipe>();

  constructor(private recepiService: RecipeService ) { }

  ngOnInit(): void {
    // console.log('rcp= ', this.rcp)
  }

  OnReceipeSelect(rcpSelected: Recipe){
    // console.log('rcpSelected:', rcpSelected)
    //this.rcpSel.emit(rcpSelected);
    this.recepiService.rcpSel.emit(this.rcp)
  }

}
