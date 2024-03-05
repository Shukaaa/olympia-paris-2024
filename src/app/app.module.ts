import {importProvidersFrom, NgModule} from '@angular/core';
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
import { AthletesComponent } from './core/views/athletes/athletes.component';
import { MedalsComponent } from './core/views/medals/medals.component';
import {HttpClientModule} from "@angular/common/http";
import {OlympiaService} from "./core/service/olympia.service";

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
    ImageDirectorComponent,
    AthletesComponent,
    MedalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    importProvidersFrom(HttpClientModule),
    OlympiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
