import {Component} from '@angular/core';
import {faker} from "@faker-js/faker";
import {CarouselData} from "../../types/carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {
    for (let i = 0; i < 3; i++) {
      this.topDataMale.push({
        title: `Top ${i + 1}`,
        description: `${faker.person.fullName()}`,
        image: faker.image.people(400, 400, true),
        link: 'https://via.placeholder.com/150'
      });
    }
  }

  topDataMale: CarouselData[] = [];

  topDataFemale = [
    {
      title: 'Top 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
      link: 'https://via.placeholder.com/150'
    },
    {
      title: 'Top 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
      link: 'https://via.placeholder.com/150'
    },
    {
      title: 'Top 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
      link: 'https://via.placeholder.com/150'
    }
  ];

  selectedSex = ""
  selectedDiscipline = ""

  openLink(url: string) {
    window.open(url, '_self');
  }

  sexUpdated(sex: any) {
    this.selectedSex = sex;
  }

  disciplineUpdated(discipline: any) {
    this.selectedDiscipline = discipline;
  }
}
