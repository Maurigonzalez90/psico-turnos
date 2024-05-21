import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user.component';
import { MaterialModule } from 'src/app/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  declarations: [CardUserComponent],
  exports: [
    CardUserComponent,
  ]
})
export class CardUserModule { }
