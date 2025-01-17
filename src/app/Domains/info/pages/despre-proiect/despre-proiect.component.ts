import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-despre-proiect',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeaderComponent],
  templateUrl: './despre-proiect.component.html'
})
export class DespreProiectComponent {

}
