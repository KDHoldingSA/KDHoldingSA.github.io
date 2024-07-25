import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { LogoComponent } from './components/logo/logo.component';
import { DescriptionComponent } from './components/description/description.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CurrentHoldingsComponent } from "./components/current-holdings/current-holdings.component";

@Component({
  selector: 'kdh-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatGridListModule,
    LogoComponent,
    DescriptionComponent,
    CopyrightComponent,
    CurrentHoldingsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kdholdingsa';
}
