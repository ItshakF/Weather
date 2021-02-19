import { createAction, props } from '@ngrx/store';
import { WeatherDetails } from '../model/weather-details.model';
import { Weather } from '../model/weather.model';

export enum actions {
  AddWeather = '[Main] Add Weather',
  SuccessAdd = '[Main] Success Add',
  FailedAdd = '[Main] Failed Add',
}

export const addWeather = createAction(
  actions.AddWeather, props<{ weather: Weather}>()
);

export const successAdd =  createAction(
  actions.SuccessAdd, props<{weatherDetails: WeatherDetails}>()
);

export const failedAdd = createAction(
  actions.FailedAdd
);
