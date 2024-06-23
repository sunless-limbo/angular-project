import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'content/:id',
    title: 'Content Page',
    component: ContentComponent,
  },
  {
    path: 'weather',
    title: 'Weather Page',
    component: WeatherComponent,
  },
];
