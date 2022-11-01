import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../service/shopping-list.service";


@Component({
    selector: 'app-shoppinglistedit',
    templateUrl: './shoppinglistedit.component.html',
    styleUrls: ['./shoppinglistedit.component.css']
})

export class ShoppinglisteditComponent {

  @ViewChild('nameInput', {static: false}) varNameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', {static: false}) varAmountInput: ElementRef<HTMLInputElement>;

  // @Output() newIngredient = new EventEmitter<Ingredient>;

  constructor(private shoppingListService: ShoppingListService){}

  onAddIngredient(){
      // console.log('Nome Ingr. ', this.varNameInput)
      // console.log('Qta  Ingr. ', this.varAmountInput)
      // console.log('Nome Ingr. ', this.varNameInput.nativeElement.value)
      // console.log('Qta  Ingr. ', +this.varAmountInput.nativeElement.value)
      const name: string = this.varNameInput.nativeElement.value
      const amount: number = +this.varAmountInput.nativeElement.value
      const ingredientToAdd = new Ingredient( name, amount)
      if(name && amount){
        // output the new ingredient
        // this.newIngredient.emit(ingredientToAdd)
        this.shoppingListService.addIngredient(ingredientToAdd)

        // reset form field
        this.varNameInput.nativeElement.value = null
        this.varAmountInput.nativeElement.value = null
      }else{
        alert('Devi indicare un ingrediente e la quamtità!')
      }

  }

}
