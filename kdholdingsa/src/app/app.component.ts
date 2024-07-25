import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { LogoComponent } from './components/logo/logo.component';
import { DescriptionComponent } from './components/description/description.component';
import { CurrentHoldingsTableComponent } from './components/current-holdings-table/current-holdings-table.component';
import { CurrentHoldingsChartComponent } from './components/current-holdings-chart/current-holdings-chart.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@Component({
  selector: 'kdh-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatGridListModule, 
    LogoComponent, 
    DescriptionComponent, 
    CurrentHoldingsTableComponent, 
    CurrentHoldingsChartComponent, 
    CopyrightComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kdholdingsa';
}
