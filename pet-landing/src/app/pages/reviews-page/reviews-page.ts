import { Component } from '@angular/core';
import { Reviews } from '../../components/reviews/reviews';

@Component({
  selector: 'app-reviews-page',
  imports: [Reviews],
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.css',
})
export class ReviewsPage {}
