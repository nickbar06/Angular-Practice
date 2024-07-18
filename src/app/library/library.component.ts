import { Component, OnInit } from '@angular/core';
import { Library, libraries } from '../songs';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  libraries: Library[] = [];
  constructor() { }

  ngOnInit(): void {
    this.libraries = libraries;
  }


}
