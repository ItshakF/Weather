import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as dashActions from '../action/actions';
import { WeatherService } from '../weather.service';


@Injectable()

export class WeatherEffect {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType(dashActions.addWeather),
    pipe(concatMap((weather) => {
      return this.weatherService.getWeather(weather.weather)
        .pipe(
          map(weatherData => dashActions.successAdd({ weatherDetails: {
            city: weatherData.name,
            temperature: weatherData.main.temp,
            units: weather.weather.units,
            status: weatherData.weather[0].description,
            icon: weatherData.weather[0].icon
          }
        })),
        catchError(() => of(dashActions.failedAdd))
        );
    })
  )));

  constructor(private actions$: Actions,
              private weatherService: WeatherService) {}
}
