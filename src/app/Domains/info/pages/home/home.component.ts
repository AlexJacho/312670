import { Component } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  isOpen = false;

}

