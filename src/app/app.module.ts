import { FormsModule } from '@angular/forms';
import { TitlecasePipe } from './titlecase/titlecase.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    TitlecaseComponent,
    TitlecasePipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent, StarComponent]
})
export class AppModule { }
