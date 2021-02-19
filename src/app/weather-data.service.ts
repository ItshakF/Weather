import { Injectable } from '@angular/core';
import { WeatherDetails } from './model/weather-details.model';
import { Weather } from './model/weather.model';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  weatherData: WeatherDetails[];
  currentWeather: WeatherDetails;

  constructor(private weatherService: WeatherService) {
    this.weatherData = [];
    this.currentWeather = {
      city: '',
      temperature: 0,
      status: '',
      icon: '',
      units: 'standard'
    };
  }

  addWeather(weather: Weather): WeatherDetails{
    this.weatherService.getWeather(weather).subscribe(data => {
      if (data.name) {
        this.currentWeather = {
          city: data.name,
          temperature: data.main.temp,
          units: weather.units,
          status: data.weather[0].description,
          icon: data.weather[0].icon
        };
        this.weatherData.push(this.currentWeather);
      }
      else{
        alert('Wrong city input');
      }
    });
    return this.currentWeather;
  }

  getWeathers(): WeatherDetails[] {
    return this.weatherData;
  }
}
