import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
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
import { ForecastData } from '../interfaces/forecast-data';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, DatePipe, ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  @Input() geocodeDataJson!: GeocodeData;
  @Input() weatherDataJson!: WeatherData;
  @Input() tempDataJson!: TemperatureData;
  @Input() forecastDataJson: ForecastData[] = [];

  currentTime = new Date();
  searchBar = new FormGroup({
    city: new FormControl(''),
  });
  tempUnit = '';

  onSel(value: string): void {
    this.tempUnit = value;
    this.weatherApiService
      .getWeatherUnits(
        this.geocodeDataJson.latitude,
        this.geocodeDataJson.latitude,
        `${this.tempUnit}`,
      )
      .subscribe((res) => {
        this.tempDataJson = {
          temperature: `${res.main.temp}`,
        };
      });
  }

  constructor(private weatherApiService: WeatherApiService) {}

  searchResult() {
    // geolocation data
    this.weatherApiService
      .getGeocode(`${this.searchBar.value.city}`)
      .subscribe((res) => {
        this.geocodeDataJson = {
          name: `${res[0].name}`,
          country: `${res[0].country}`,
          latitude: res[0].lat,
          longitude: res[0].lon,
          state: `${res[0].state}`,
        };

        // weather data
        this.weatherApiService
          .getWeather(
            this.geocodeDataJson.latitude,
            this.geocodeDataJson.longitude,
          )
          .subscribe((res) => {
            this.weatherDataJson = {
              icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
              weather: `${res.weather[0].main}`,
              description: `${res.weather[0].description}`,
              temperature: res.main.temp,
              clouds: res.clouds.all,
              pressure: res.main.pressure,
              humidity: res.main.humidity,
              wind: res.wind.speed,
            };
          });

        // forecast data
        this.weatherApiService
          .getForecast(
            this.geocodeDataJson.latitude,
            this.geocodeDataJson.longitude,
          )
          .subscribe((res) => {
            this.forecastDataJson = [
              {
                date: `${res.list[0].dt_txt}`,
                icon: `http://openweathermap.org/img/wn/${res.list[0].weather[0].icon}@2x.png`,
                weather: `${res.list[0].weather[0].main}`,
                description: `${res.list[0].weather[0].main}`,
                clouds: res.list[0].clouds.all,
                temperature: res.list[0].main.temp,
                pressure: res.list[0].main.pressure,
                humidity: res.list[0].main.humidity,
                wind: res.list[0].wind.speed,
              },
            ];
            this.forecastDataJson.push(
              {
                date: `${res.list[1].dt_txt}`,
                icon: `http://openweathermap.org/img/wn/${res.list[1].weather[0].icon}@2x.png`,
                weather: `${res.list[1].weather[0].main}`,
                description: `${res.list[1].weather[0].main}`,
                clouds: res.list[1].clouds.all,
                pressure: res.list[1].main.pressure,
                humidity: res.list[1].main.humidity,
                wind: res.list[1].wind.speed,
                temperature: res.list[1].main.temp,
              },
              {
                date: `${res.list[2].dt_txt}`,
                icon: `http://openweathermap.org/img/wn/${res.list[2].weather[0].icon}@2x.png`,
                weather: `${res.list[2].weather[0].main}`,
                description: `${res.list[2].weather[0].main}`,
                clouds: res.list[2].clouds.all,
                pressure: res.list[2].main.pressure,
                humidity: res.list[2].main.humidity,
                wind: res.list[2].wind.speed,
                temperature: res.list[2].main.temp,
              },
              {
                date: `${res.list[3].dt_txt}`,
                icon: `http://openweathermap.org/img/wn/${res.list[3].weather[0].icon}@2x.png`,
                weather: `${res.list[3].weather[0].main}`,
                description: `${res.list[3].weather[0].main}`,
                clouds: res.list[3].clouds.all,
                pressure: res.list[3].main.pressure,
                humidity: res.list[3].main.humidity,
                wind: res.list[3].wind.speed,
                temperature: res.list[3].main.temp,
              },
              {
                date: `${res.list[4].dt_txt}`,
                icon: `http://openweathermap.org/img/wn/${res.list[4].weather[0].icon}@2x.png`,
                weather: `${res.list[4].weather[0].main}`,
                description: `${res.list[4].weather[0].main}`,
                clouds: res.list[4].clouds.all,
                pressure: res.list[4].main.pressure,
                humidity: res.list[4].main.humidity,
                wind: res.list[4].wind.speed,
                temperature: res.list[4].main.temp,
              },
            );
          });
      });
  }
}
/*

              {
                date: `${res.list[1].dt_txt}`,
                icon: `http://openweathermap.org/img/wn/${res.list[1].weather[1].icon}@2x.png`,
                weather: `${res.list[1].weather[1].main}`,
                description: `${res.list[1].weather[1].main}`,
                clouds: res.list[1].clouds.all,
                temperature: res.list[1].main.temp,
                pressure: res.list[1].main.pressure,
                humidity: res.list[1].main.humidity,
                wind: res.list[1].wind.speed,
              },
 */
