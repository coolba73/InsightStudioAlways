import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from "./main/main.component";
import { AppRouting } from "./app.routing";
import { provideRoutes } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
    ,MainComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
