import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  baseGeoApiUrl = environment.baseGeoApiUrl;
  baseWeatherApiUrl = environment.baseWeatherApiUrl;
  apiKey = environment.apiKey;
  units = 'metric';

  async getGeocode(city: string) {
    try {
      const res = await fetch(
        `${this.baseGeoApiUrl}q=${city}&units=${this.units}&appid=${this.apiKey}`,
      );
      const data = await res.json();
      return data ?? [];
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  async getWeather(city: any) {
    try {
      const res = await fetch(
        `${this.baseWeatherApiUrl}q=${city}&units=${this.units}&appid=${this.apiKey}`,
      );
      const data = await res.json();
      return data ?? [];
    } catch (error) {
      console.error('Error: ', error);
    }
  }
}
