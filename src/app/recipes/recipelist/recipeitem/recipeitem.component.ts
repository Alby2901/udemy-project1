import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() rcp: Recipe;
  @Output() rcpSel = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
    // console.log('rcp= ', this.rcp)
  }

  OnReceipeSelect(rcpSelected: Recipe){
    // console.log('rcpSelected:', rcpSelected)
    this.rcpSel.emit(rcpSelected);
  }

}
