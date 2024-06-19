import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  /********** Open weather api integration ***********/
  /*
  change metrics to metric | imperial
  lat and lon based on geolocation
  http://api.openweathermap.org/geo/1.0/direct?q=Nairobi&appid=463cc47a0f3d848c768c537253f9781a

  function apiWeather() {
    let location:string = 'Nairobi';
    location = document.querySelector('.loca');
    const apiKey:string = '463cc47a0f3d848c768c537253f9781a'

    transform data to object in JSON format
    const apiReq:string = {
      name: 'My Category',
      description: 'My Description',
    };
  */
}
