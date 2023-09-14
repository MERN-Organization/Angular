import { Component } from '@angular/core';
import { env } from './../../../environment/env';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  modulesArray = env.modulesArray;
}
