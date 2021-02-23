import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';



const Material = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatListModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})

export class MaterialModule { }
