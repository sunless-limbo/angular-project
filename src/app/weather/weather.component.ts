import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  geocodeData: string = '';
  weatherData: string = '';
  iconCode: string = '';
  iconUrl: string = '';

  constructor(private weatherApiService: WeatherApiService) {}

  ngOnInit(): void {
    // geocoding data
    this.weatherApiService.getGeocode().subscribe((res) => {
      this.geocodeData = `
        ${res[0].name}
        ${res[0].country}
        ${res[0].lat}
        ${res[0].lon}
        ${res[0].state}
      `;
    });

    // weather data
    this.weatherApiService.getWeather().subscribe((res) => {
      this.iconCode = `${res.weather[0].icon}`;
      this.iconUrl = `http://openweathermap.org/img/wn/${this.iconCode}@2x.png`;
      this.weatherData = `
        ${res.weather[0].main}
        ${res.clouds.all}%
        ${res.weather[0].description}
        ${res.main.temp} degrees
        ${res.main.pressure} pressure degrees
        ${res.main.humidity} humidity degrees
      `;
    });
  }
}
