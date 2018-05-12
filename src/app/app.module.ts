import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { AppRouting } from "./app.routing";
import { provideRoutes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import {
      MatButtonModule,
      MatMenuModule,
      MatCommonModule,
      MatDialogModule
 } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    MatButtonModule,
    MatMenuModule,
    MatCommonModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
