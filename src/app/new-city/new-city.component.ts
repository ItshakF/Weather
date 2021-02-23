import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherDetails } from '../model/weather-details.model';
import { Weather } from '../model/weather.model';

interface Unit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.less']
})

export class NewCityComponent implements OnInit {

  @Output() weatherAddEvent: EventEmitter<Weather>;
  @Input() isDisabled: boolean;
  @Input()
  weatherDetails!: WeatherDetails;
  city: string;
  unit: string;
  units: Unit[];

  constructor() {
    this.weatherAddEvent = new EventEmitter<Weather>();
    this.city = '';
    this.unit = 'standard';
    this.isDisabled = false;
    this.units = [
      { value: 'standard', viewValue: 'Standard' },
      { value: 'metric', viewValue: 'Metric' },
      { value: 'imperial', viewValue: 'Imperial' }
    ];
   }

  ngOnInit(): void {
  }

  addNewWeather(): void {
    this.isDisabled = true;
    this.weatherAddEvent.emit({ city: this.city, units: this.unit});
  }

}
