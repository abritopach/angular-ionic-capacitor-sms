import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomeComponent } from './home';
import { HomeComponentRoutingModule } from './home-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomeComponentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [HomeComponent],
  entryComponents: [HomeComponent]
})
export class HomeModule {}
