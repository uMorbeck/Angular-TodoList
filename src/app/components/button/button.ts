import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  buttonType = input<'button' | 'submit' | 'reset'>();
  buttonLabel = input<string>();
  buttonAction = output();

}
