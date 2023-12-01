import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/views/home/home.component";
import {ErrorComponent} from "./core/views/error/error.component";
import {DisciplinesComponent} from "./core/views/disciplines/disciplines.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'disciplines', component: DisciplinesComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
