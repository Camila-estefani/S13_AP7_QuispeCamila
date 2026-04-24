import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  message = '';

  showWelcomeMessage(): void {
    this.message = 'Excelente eleccion. Tu mascota merece cuidado premium.';
  }
}
