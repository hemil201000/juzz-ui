import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmountEnterComponent } from './enter-amount/amount-enter/amount-enter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , AmountEnterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'juzz-ui';
}
