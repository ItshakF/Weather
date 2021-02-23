import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDetails } from '../model/weather-details.model';
import { Weather } from '../model/weather.model';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MainDashboardComponent implements OnInit {

  allWeather: Observable<WeatherDetails[]>;
  currentId: number;

  constructor(private dataService: WeatherDataService) {
    this.currentId = 0;
    this.allWeather = this.dataService.getWeathers();
  }

  ngOnInit(): void {
  }

  addWeather(weather: Weather): void {
    console.log(weather);
    const maxWeatherToShow = 3;
    if (this.currentId < maxWeatherToShow) {
      this.currentId++;
      this.dataService.addWeather(weather, this.currentId === maxWeatherToShow ? false : true );
    }
  }

  trackItem(index: number, item: WeatherDetails): void { }

}
