import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg">
      <h3>Details: {{childSelectedKeg.name}}</h3>
      <h4>Brand name: {{childSelectedKeg.brand}}</h4>
      <h4>Price: $ {{childSelectedKeg.price}}/pint</h4>
      <h4>Alcohol Content: {{childSelectedKeg.alcoholContent}}%</h4>
      <h4>Amount: {{childSelectedKeg.pint}} pints</h4>
      <hr>
      <h3>Edit Keg:</h3>
      <label>Enter Keg Name:</label>
      <input [(ngModel)]="childSelectedKeg.name"><br>
      <label>Enter Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand"><br>
      <label>Enter Price:</label>
      <input [(ngModel)]="childSelectedKeg.price"><br>
      <label>Enter Alkohol Content:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent"><br>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  this.doneButtonClickedSender.emit();
}
}
