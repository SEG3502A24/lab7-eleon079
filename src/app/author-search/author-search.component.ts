import { Component } from '@angular/core';
import { AuthorsService } from '../books/service/authors.service';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css']
})
export class AuthorSearchComponent {
  authorId: number = 0;
  authorDetails: any;
  errorMessage: string = '';

  constructor(private authorsService: AuthorsService) {}

  searchAuthor() {
    this.authorsService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.authorDetails = data;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Auteur non trouvé.';
        this.authorDetails = null;
      }
    });
  }
}
