import { Component, inject } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';
import { GeocodeData } from '../interfaces/geocode-data';
import { WeatherData } from '../interfaces/weather-data';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  geocodeDataObject!: GeocodeData;
  weatherDataObject!: WeatherData;
  weatherData: string = '';
  iconCode: string = '';
  iconUrl: string = '';

  private weatherApiService = inject(WeatherApiService);

  ngOnInit(): void {
    // geocoding data object edition
    this.weatherApiService.getGeocode().subscribe((res) => {
      this.geocodeDataObject = {
        name: `${res[0].name}`,
        country: `${res[0].country}`,
        latitude: `${res[0].lat}`,
        longitude: `${res[0].lon}`,
        state: `${res[0].state}`,
      };
    });
    // weather data object edition
    this.weatherApiService.getWeather().subscribe((res) => {
      this.weatherDataObject = {
        icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
        weather: `${res.weather[0].main}`,
        clouds: `${res.clouds.all}%`,
        description: `${res.weather[0].description}`,
        temperature: `${res.main.temp} degrees celcius`,
        pressure: `${res.main.pressure} pressure degrees`,
        humidity: `${res.main.humidity} humidity degrees`,
      };
    });
  }
}
