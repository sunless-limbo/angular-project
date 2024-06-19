import { Component, Input, inject } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weatherService = inject(WeatherApiService);
}
/*
  @Input() weatherApiService!: WeatherApiService;
  weather$!: Observable<any>;
  constructor(private weatherApiService: WeatherApiService) {}
*/
