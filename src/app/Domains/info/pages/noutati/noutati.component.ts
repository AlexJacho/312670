import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-noutati',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './noutati.component.html'
})
export class NoutatiComponent {

}
