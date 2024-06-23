import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  // weather api
  async getWeather(city: string) {
    try {
      const res = await fetch(
        `${environment.baseWeatherApiUrl}q=${city}&appid=${environment.apiKey}`,
      );
      const data = await res.json();
      return data ?? [];
    } catch (error) {
      console.error('Error: ', error);
    }
  }
  // units of the weather api
  async getWeatherUnits(city: string, units: string) {
    try {
      const res = await fetch(
        `${environment.baseWeatherApiUrl}q=${city}&units=${units}&appid=${environment.apiKey}`,
      );
      const data = await res.json();
      return data ?? [];
    } catch (error) {
      console.error('Error: ', error);
    }
  }
  // geocoding api
  async getGeocode(city: string) {
    try {
      const res = await fetch(
        `${environment.baseGeoApiUrl}q=${city}&units=${environment.units}&appid=${environment.apiKey}`,
      );
      const data = await res.json();
      return data ?? [];
    } catch (error) {
      console.error('Error: ', error);
    }
  }
}
/*

*/
