import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

}
