import { Component } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OverlayModule, RouterLinkWithHref,],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;

}
