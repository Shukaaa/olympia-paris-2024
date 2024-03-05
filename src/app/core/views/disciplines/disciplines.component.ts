import {Component} from '@angular/core';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent {
  disciplineData = [
    { src: "assets/img/laufen.jpg", title: "100m-Sprint", srcLow: "assets/img/laufen_low.jpg" },
    { src: "assets/img/weitsprung.jpg", title: "Longjump", srcLow: "assets/img/weitsprung_low.jpg" },
    { src: "assets/img/schwimmen.jpg", title: "Swimming", srcLow: "assets/img/schwimmen_low.jpg" },
    { src: "assets/img/pferd.jpg", title: "Showjumping", srcLow: "assets/img/pferd_low.jpg" },
  ]
}
