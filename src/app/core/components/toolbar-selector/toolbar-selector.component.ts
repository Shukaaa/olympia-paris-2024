import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar-selector',
  templateUrl: './toolbar-selector.component.html',
  styleUrls: ['./toolbar-selector.component.scss']
})
export class ToolbarSelectorComponent implements AfterViewInit {
  @Output() sexSelected = new EventEmitter<string>();
  @Output() disciplineSelected = new EventEmitter<string>();

  ngAfterViewInit() {
    this.toggleChipSex("male");
    this.toggleChipDiscipline("rennen");
  }

  toggleChipSex(sex: 'male' | 'female') {
    const chips = [
      "chip-male",
      "chip-female"
    ]

    this.toggleChip(chips, sex);
    this.sexSelected.emit(sex);
  }

  toggleChipDiscipline(discipline: 'rennen' | 'springen' | 'schwimmen' | 'pferd') {
    const chips = [
      "chip-rennen",
      "chip-springen",
      "chip-schwimmen",
      "chip-pferd",
    ]

    this.toggleChip(chips, discipline);
    this.disciplineSelected.emit(discipline);
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
