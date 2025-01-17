import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HeaderComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {




}

