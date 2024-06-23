import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  baseGeoApiUrl = environment.baseGeoApiUrl;
  baseWeatherApiUrl = environment.baseWeatherApiUrl;
  apiKey = environment.apiKey;
  city = environment.city;
  units = environment.units;
  geoApiUrl = `${this.baseGeoApiUrl}q=${this.city}&units=${this.units}&appid=${this.apiKey}`;
  weatherApiUrl = `${this.baseWeatherApiUrl}q=${this.city}&units=${this.units}&appid=${this.apiKey}`;

  private http = inject(HttpClient);

  getGeocode(): Observable<any> {
    return this.http.get(`${this.geoApiUrl}`);
  }
  getWeather(): Observable<any> {
    return this.http.get(`${this.weatherApiUrl}`);
  }
}
