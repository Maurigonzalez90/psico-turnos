import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmUserComponent } from './abm-user.component';
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

  // SE DECLARA Y LUEGO EXPORTA, SINO DA ERROR !!!!!
  declarations: [AbmUserComponent],
  exports: [AbmUserComponent]
})
export class AbmUserModule {}




