import {Component, Input} from '@angular/core';
import {CarouselData} from "../../types/carousel";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() data: CarouselData[] = [];
  @Input() imagesShown: 1 | 3 = 1;

  dataSelectedIndex: number = 0;

  changeIndex(add: number) {
    if (this.dataSelectedIndex + add < 0) {
      this.dataSelectedIndex = this.data.length - 1;
      return
    }

    if (this.dataSelectedIndex + add >= this.data.length) {
      this.dataSelectedIndex = 0;
      return
    }

    this.dataSelectedIndex += add;
  }
}
