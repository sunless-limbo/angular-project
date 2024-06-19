import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'content',
    component: ContentComponent,
    title: 'Content Page',
  },
  {
    path: 'weather',
    component: WeatherComponent,
    title: 'Weather Page',
  },
];
