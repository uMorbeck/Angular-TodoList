import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  buttonType = input<'button' | 'submit' | 'reset'>();
  buttonLabel = input<string>();
  buttonAction = output();
}
