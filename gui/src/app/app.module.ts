import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './core/views/error/error.component';
import { LogoComponent } from './core/components/logo/logo.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import {MatIconModule} from "@angular/material/icon";
import { CarouselComponent } from './core/components/carousel/carousel.component';
import { ToolbarSelectorComponent } from './core/components/toolbar-selector/toolbar-selector.component';
import { DisciplinesComponent } from './core/views/disciplines/disciplines.component';
import { ImageDirectorComponent } from './core/components/image-director/image-director.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LogoComponent,
    NavbarComponent,
    CarouselComponent,
    ToolbarSelectorComponent,
    DisciplinesComponent,
    ImageDirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
