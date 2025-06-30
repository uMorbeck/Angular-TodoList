import { Component } from '@angular/core';
import { CatComponent } from '../cat/cat.component';

@Component({
  selector: 'app-footer',
  imports: [CatComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
