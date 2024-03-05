import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sex-selector',
  templateUrl: './sex-selector.component.html',
  styleUrls: ['./sex-selector.component.scss']
})
export class SexSelectorComponent implements AfterViewInit {
  @Output() sexSelected = new EventEmitter<string>();

  ngAfterViewInit() {
    this.toggleChipSex("male");
  }

  toggleChipSex(sex: 'male' | 'female') {
    const chips = [
      "chip-male",
      "chip-female"
    ]

    this.toggleChip(chips, sex);
    this.sexSelected.emit(sex);
  }

  toggleChip(chips: string[], chipSelected: string) {
    for (let i = 0; i < chips.length; i++) {
      let chip = document.getElementById(chips[i]);
      if (!chip) return;
      chip.classList.remove("active");

      if (chips[i] === `chip-${chipSelected}`) {
        chip.classList.add("active");
      }
    }
  }
}
