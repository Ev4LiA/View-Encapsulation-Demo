import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { MonthCardComponent } from './month-card/month-card.component';
import { MonthImageComponent } from './month-image/month-image.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthCardComponent,
    MonthImageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
