import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  //Object to store info inputted in the Dialog
  data = {
    name: '',
    budget: '',
  };

  

  /**
   * Checks if the required fieald are filled out
   * @returns true if all the input fields are filled out
   */
  isFormFilledOut(): boolean {
    if (
        this.data.name &&
        this.data.budget
    ) {
        return true; // Form is completed
    } else {
        return false; // Form is incomplete
    }
}
}
