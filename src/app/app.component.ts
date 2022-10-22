import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  selezioneRicevuta: string = 'receipe';

  OnRiceviSelezione(selezione: string) {
    // console.log('Selez. ricevuta ' + selezione)
    this.selezioneRicevuta = selezione;
  }

}
