import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string;

  constructor(private httpClient: HttpClient) {
    this.apiKey = '0d7303c17ee3d3482cd82a2ad273a90d';
  }

  getWeather(weather: Weather): Observable<any> {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' +  weather.city +
      '&appid=' + this.apiKey + '&units=' + weather.units );
  }
}
