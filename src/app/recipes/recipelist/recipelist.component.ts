import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Spaghetti alla matriciana',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      'https://media.istockphoto.com/photos/bucatini-allamatriciana-wikipedia-the-free-encyclopedia-picture-id1264712750?s=612x612'),
    new Recipe('Risotto alla milanese',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'https://media.istockphoto.com/photos/risotto-picture-id509486128?k=20&m=509486128&s=612x612&w=0&h=pkvM-GnAG0rLEZeqLisj-9VHvtlLVuYM4AKdbdsHX1M=')
  ];

  @Output() RecRcpSel = new EventEmitter<Recipe>;

  constructor() { }

  ngOnInit(): void {
  }

  OnRecRcpSel(rcpRecSelParam: Recipe){
    // console.log('rcpRecSelParam: ', rcpRecSelParam)
    this.RecRcpSel.emit(rcpRecSelParam)


  }

}
