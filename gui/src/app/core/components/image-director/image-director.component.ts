import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-director',
  templateUrl: './image-director.component.html',
  styleUrls: ['./image-director.component.scss']
})
export class ImageDirectorComponent {
  @Input() title: string = "";
  @Input() src: string = "";
}
