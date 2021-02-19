import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherEffect } from './effect/effect';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MaterialModule } from './material.modules';
import { NewCityComponent } from './new-city/new-city.component';
import { reducer } from './reducer/reducer';



@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    NewCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([WeatherEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
