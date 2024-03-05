import {Component, OnInit} from '@angular/core';
import {OlympiaService} from "../../service/olympia.service";
import {Athlete} from "../../types/athlete";

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {
  athletes: Athlete[] = []

  constructor(private olympiaService: OlympiaService) { }

  ngOnInit() {
    this.olympiaService.getAthletesResponse().subscribe(res => console.log(res))
  }
}
