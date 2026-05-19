import { Component } from '@angular/core';
import { Services } from '../../components/services/services';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [Services],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPage {}
