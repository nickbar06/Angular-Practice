import { Component, Input, OnInit } from '@angular/core';
import { Library } from '../songs';

@Component({
  selector: 'library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.css']
})
export class LibraryItemComponent implements OnInit {
  @Input() library!: Library;
  @Input() backgroundColor: String = 'bg-neutral-900';
  constructor() { }

  ngOnInit(): void {
  }

} 
