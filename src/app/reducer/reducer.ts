import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import * as dashActions from '../action/actions';
import { WeatherDetails } from '../model/weather-details.model';

export interface WeatherState extends EntityState<WeatherDetails> {}

export function selectWeatherName(weatherDetails: WeatherDetails): string {
  return weatherDetails.city;
}

export const adapter: EntityAdapter<WeatherDetails> = createEntityAdapter<WeatherDetails>({
  selectId: selectWeatherName,
});

export const key = 'dash';

export const initialState = adapter.getInitialState();
console.log(initialState);

const dashboardReducer = createReducer(
  initialState,
  on(dashActions.successAdd, (state, { weatherDetails }) => {
    console.log('add success ' + weatherDetails);
    return adapter.addOne(weatherDetails, state);
  }),
  on(dashActions.failedAdd, (state) => {
    console.log('failed to load');
    return adapter.addOne( {
      city: 'f',
      temperature: 2,
      units: '',
      status: '',
      icon: ''
    }, state);
  })
);

export function reducer(state: WeatherState, action: Actions): EntityState<WeatherDetails> {
  return dashboardReducer(state, action);
}
