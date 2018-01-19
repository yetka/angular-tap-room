import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap Room</h1>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <hr>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('BlueLagoon','Kormoran', 5, 6),
    new Keg('HardCyder','AngryOrchard', 7, 4),
    new Keg('DeepDark','Guiness', 10, 8),
    new Keg('Pilsner','Grybow', 6, 5)
  ];

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
