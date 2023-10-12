import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'olympia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit() {
    let spans = document.getElementsByTagName("span")

    for (let i = 0; i < spans.length; i++) {
      let span = spans[i];
      span.addEventListener("mouseover", function() {
        span.classList.add('active');
        span.classList.remove('inactive');
      });
      span.addEventListener("mouseout", function() {
        span.classList.remove('active');
        span.classList.add('inactive');
      });
    }
  }
}
