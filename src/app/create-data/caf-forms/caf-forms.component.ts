import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
@Component({
  selector: 'app-caf-forms',
  templateUrl: './caf-forms.component.html',
  styleUrls: ['./caf-forms.component.css']
})
export class CafFormsComponent {
  public cafformDataForm!: FormGroup;
}
