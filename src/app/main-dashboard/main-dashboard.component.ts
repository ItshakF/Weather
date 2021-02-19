import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeatherDetails } from '../model/weather-details.model';
import { WeatherHelp } from '../model/weather-help.model';
import { Weather } from '../model/weather.model';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.less']
})
export class MainDashboardComponent implements OnInit {

  allWeather: BehaviorSubject<WeatherHelp[]>;
  currentId: number;
  currentWeather: WeatherDetails;
  weathers: WeatherDetails[];

  constructor(private dataService: WeatherDataService) {
    this.allWeather = new BehaviorSubject<WeatherHelp[]>([
      {id: 0, isDisabled: false}
    ]);
    this.currentId = 0;
    this.currentWeather = {city: '', temperature: 0, icon: '', status: '', units: '' };
    this.weathers = this.dataService.getWeathers();
  }

  ngOnInit(): void {
  }

  addWeather(weather: Weather): void {
    console.log(weather);
    // weather.city = 'Tel%20Aviv';
    this.currentWeather = this.dataService.addWeather(weather);
    if (this.currentId < 2) {
      this.addNewComponent();
    }
  }

  addNewComponent(): void {
    if (this.currentId === 0){
      this.allWeather.next([{ id: this.currentId++, isDisabled: false }]);
    } else {
      this.allWeather.next([...this.allWeather.getValue(), { id: this.currentId++, isDisabled: false }]);
    }
  }
}
