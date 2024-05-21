import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule,MatCardModule,
    MatAutocompleteModule,MatInputModule, MatFormFieldModule// primero se importa
  ],
  exports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule,MatCardModule,
    MatAutocompleteModule, MatInputModule,MatFormFieldModule // se debe exportar para el consumo de los ts
  ]
})
export class MaterialModule { }



