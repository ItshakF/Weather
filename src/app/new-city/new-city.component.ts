import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Weather } from '../model/weather.model';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.less']
})
export class NewCityComponent implements OnInit {

  @Output() weatherAddEvent: EventEmitter<Weather>;

  constructor() {
    this.weatherAddEvent = new EventEmitter<Weather>();
   }

  ngOnInit(): void {
  }

}
