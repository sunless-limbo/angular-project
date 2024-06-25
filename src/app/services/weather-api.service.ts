import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  // geocoding api
  getGeocode(city: string): Observable<any> {
    return this.http.get<any>(
      `${environment.baseGeoApiUrl}q=${city}&units=${environment.units}&appid=${environment.apiKey}`,
    );
  }

  // weather api
  getWeather(latitude: number, longitude: number) {
    return this.http.get<any>(
      `${environment.baseWeatherApiUrl}lat=${latitude}&lon=${longitude}&appid=${environment.apiKey}`,
    );
  }

  // units of the weather api
  getWeatherUnits(latitude: number, longitude: number, units: string) {
    return this.http.get<any>(
      `${environment.baseWeatherApiUrl}lat=${latitude}&lon=${longitude}&units=${units}&appid=${environment.apiKey}`,
    );
  }

  // forecast api
  getForecast(latitude: number, longitude: number) {
    return this.http.get<any>(
      `${environment.baseForecastApiUrl}lat=${latitude}&lon=${longitude}&appid=${environment.apiKey}`,
    );
  }
}
