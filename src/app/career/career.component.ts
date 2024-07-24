import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
    templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  apply(position: string) {
    alert(`Applying for: ${position}`);
  }
}
