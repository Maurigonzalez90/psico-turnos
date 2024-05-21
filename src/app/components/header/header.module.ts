import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HeaderComponent } from './header.component';


@NgModule({
  imports: [
    MaterialModule
 ],
  declarations: [HeaderComponent],
  exports: [ HeaderComponent]
})
export class HeaderModule { }
