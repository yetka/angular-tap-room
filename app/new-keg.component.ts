import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <div>
      <h1>New Keg</h1>
      <label>Enter Name:</label>
      <input #newName><br>
      <label>Enter Brand:</label>
      <input #newBrand><br>
      <label>Enter Price:</label>
      <input #newPrice><br>
      <label>Enter Alkohol Content:</label>
      <input #newAlcoholContent><br>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
