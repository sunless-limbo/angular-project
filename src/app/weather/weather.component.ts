import { Component, Inject } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weatherService = Inject(WeatherApiService);
}
/*
  @Input() weatherApiService!: WeatherApiService;

  weather$!: Observable<any>;
  constructor(private weatherApiService: WeatherApiService) {}
  weatherService = inject(WeatherApiService);

  weatherData: any;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe((res) => {
      this.weatherData = res;
    });
  }
*/
