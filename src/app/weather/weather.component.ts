import { Component, Input, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WeatherApiService } from '../services/weather-api.service';
import { GeocodeData } from '../interfaces/geocode-data';
import { WeatherData } from '../interfaces/weather-data';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule, NgFor],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  @Input() geocodeDataJson!: GeocodeData;
  @Input() weatherDataJson!: WeatherData;
  iconCode: string = '';
  iconUrl: string = '';
  currentTime = new Date();
  searchBar = new FormGroup({
    city: new FormControl(''),
  });

  private weatherApiService = inject(WeatherApiService);

  searchResult() {
    // geolocation data
    this.weatherApiService
      .getGeocode(`${this.searchBar.value.city}`)
      .then((res) => {
        this.geocodeDataJson = {
          name: `${res[0].name}`,
          country: `${res[0].country}`,
          latitude: `${res[0].lat}`,
          longitude: `${res[0].lon}`,
          state: `${res[0].state}`,
        };
      });

    // weather data
    this.weatherApiService.getWeather(this.searchBar.value.city).then((res) => {
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
  }
}
/*
 */
