import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  author: Author | null = null;
  message: string | null = null;

  constructor(private booksService: BooksService) {}

  searchAuthorById(id: string): void {
    if (!id) {
      this.message = 'Please enter a valid author ID.';
      this.author = null;
      return;
    }

    this.booksService.getAuthorById(id).subscribe({
      next: (data: Author) => {
        this.author = data;
        this.message = null;
      },
      error: () => {
        this.author = null;
        this.message = 'Author not found. Please check the ID and try again.';
      }
    });
  }
}
