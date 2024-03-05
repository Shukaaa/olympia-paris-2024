import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/views/home/home.component";
import {ErrorComponent} from "./core/views/error/error.component";
import {DisciplinesComponent} from "./core/views/disciplines/disciplines.component";
import {AthletesComponent} from "./core/views/athletes/athletes.component";
import {MedalsComponent} from "./core/views/medals/medals.component";
import {SprintComponent} from "./core/views/sprint/sprint.component";
import {LongjumpComponent} from "./core/views/longjump/longjump.component";
import {SwimmingComponent} from "./core/views/swimming/swimming.component";
import {ShowjumpingComponent} from "./core/views/showjumping/showjumping.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },

  { path: 'home', component: HomeComponent },
  { path: 'disciplines', component: DisciplinesComponent },
  { path: 'athletes', component: AthletesComponent },
  { path: 'medals', component: MedalsComponent },

  { path: 'disciplines/100m-sprint', component: SprintComponent},
  { path: 'disciplines/longjump', component: LongjumpComponent},
  { path: 'disciplines/swimming', component: SwimmingComponent },
  { path: 'disciplines/showjumping', component: ShowjumpingComponent },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
