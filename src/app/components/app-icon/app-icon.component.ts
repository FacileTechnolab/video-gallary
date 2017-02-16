import { Component } from '@angular/core';
import { AppDefaults } from '../../constants/app.constants';


@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css'],
  providers: [AppDefaults]
})
export class AppIconComponent {
  imageSrc: string;
  constructor(private appDefaults: AppDefaults) {
    this.imageSrc = appDefaults.imageSourc;
  }

}
