import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherDetails } from './model/weather-details.model';
import { Weather } from './model/weather.model';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  weatherData: BehaviorSubject<WeatherDetails[]>;
  currentWeather: WeatherDetails;
  newWeather: WeatherDetails;

  constructor(private weatherService: WeatherService) {
    this.newWeather = {
      city: '',
      temperature: 0,
      status: '',
      icon: '',
      units: 'standard'
    };
    this.currentWeather = this.newWeather;
    this.weatherData = new BehaviorSubject<WeatherDetails[]>([this.currentWeather]);
  }

  addWeather(weather: Weather, isNotLastElement: boolean): void {

    this.weatherService.getWeather(weather).subscribe(data => {
      console.log(data.status);
      if (data.cod) {
        this.currentWeather = {
          city: data.name,
          temperature: data.main.temp,
          units: weather.units,
          status: data.weather[0].description,
          icon: data.weather[0].icon
        };
        const tempArr: WeatherDetails[] = [];
        tempArr.push(...this.weatherData.getValue());
        tempArr[this.weatherData.getValue().length - 1] = this.currentWeather;
        if (isNotLastElement) {
          tempArr.push(this.newWeather);
        }
        this.weatherData.next(tempArr);

      }
      else {
        alert('Wrong City Input');
      }
    });
  }

  getWeathers(): BehaviorSubject<WeatherDetails[]> {
    return this.weatherData;
  }
}
