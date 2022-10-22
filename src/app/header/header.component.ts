import { Serializer } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() inviaSelezione = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(selection: string) {
    // console.log('hai selez. ' + selection)
    this.inviaSelezione.emit(selection);
  }

}
