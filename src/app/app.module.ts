import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatasheetCoreModule } from 'projects/datasheet-core/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatasheetCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
