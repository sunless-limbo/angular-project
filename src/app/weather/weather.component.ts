import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  apiUrl =
    'http://api.openweathermap.org/geo/1.0/direct?q=Nairobi&appid=463cc47a0f3d848c768c537253f9781a';
}
