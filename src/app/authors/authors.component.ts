import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';
import { Observable } from 'rxjs';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone: true,
  imports: [NgIf, NgFor]
})
export class AuthorsComponent {
  author: Author | null = null;
  message: string | null = null;

  constructor(private booksService: BooksService) {}

  searchAuthor(id: string): void {
    console.log('Searching for author with ID:', id);
    this.booksService.getAuthorById(id).subscribe({
      next: (data: Author) => {
        console.log('Author data retrieved:', data); // Log for debugging
        this.author = data;
        this.message = null;
      },
      error: () => {
        console.log('Author not found'); // Log for debugging
        this.author = null;
        this.message = 'Author not found';
      }
    });
  }
  
}
