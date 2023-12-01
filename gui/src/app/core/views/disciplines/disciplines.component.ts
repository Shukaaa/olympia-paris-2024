import {Component} from '@angular/core';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent {
  disciplineData = [
    { src: "assets/img/laufen.jpg", title: "100m-Sprint" },
    { src: "assets/img/weitsprung.jpg", title: "Weitsprung" },
    { src: "assets/img/schwimmen.jpg", title: "Schwimmen" },
    { src: "assets/img/pferd.jpg", title: "Springreiten" },
  ]
}
