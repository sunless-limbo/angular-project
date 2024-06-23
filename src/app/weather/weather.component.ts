import { Component, Input, inject } from '@angular/core';
import { DatePipe, CommonModule, NgFor } from '@angular/common';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { WeatherApiService } from '../services/weather-api.service';
import { GeocodeData } from '../interfaces/geocode-data';
import { WeatherData } from '../interfaces/weather-data';
import { TemperatureData } from '../interfaces/temperature-data';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, DatePipe, NgFor, ReactiveFormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  @Input() geocodeDataJson!: GeocodeData;
  @Input() weatherDataJson!: WeatherData;
  @Input() tempDataJson!: TemperatureData;
  iconCode: string = '';
  iconUrl: string = '';
  currentTime = new Date();
  searchBar = new FormGroup({
    city: new FormControl(''),
  });
  tempUnit = '';

  private weatherApiService = inject(WeatherApiService);

  onSel(value: string): void {
    this.tempUnit = value;
    this.weatherApiService
      .getWeatherUnits(`${this.searchBar.value.city}`, `${this.tempUnit}`)
      .then((res) => {
        this.tempDataJson = {
          temperature: `${res.main.temp}`,
        };
      });
  }
  searchResult() {
    // weather data
    this.weatherApiService
      .getWeather(`${this.searchBar.value.city}`)
      .then((res) => {
        this.weatherDataJson = {
          icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
          weather: `${res.weather[0].main}`,
          clouds: `${res.clouds.all}`,
          description: `${res.weather[0].description}`,
          temperature: `${res.main.temp}`,
          pressure: `${res.main.pressure}`,
          humidity: `${res.main.humidity}`,
        };
      });
    // geolocation data
    this.weatherApiService
      .getGeocode(`${this.searchBar.value.city}`)
      .then((res) => {
        this.geocodeDataJson = {
          name: `${res[0].name}`,
          country: `${res[0].country}`,
          latitude: res[0].lat.toFixed(2),
          longitude: res[0].lon.toFixed(2),
          state: `${res[0].state}`,
        };
      });
  }
}
/*

*/
