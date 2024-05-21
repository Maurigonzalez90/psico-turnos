import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { AbmUserModule } from 'src/app/components/abm-user/abm-user.module';
import { CardUserModule } from 'src/app/components/card-user/card-user.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    AbmUserModule,
    CardUserModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
