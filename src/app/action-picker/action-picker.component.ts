import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'action-picker',
  templateUrl: './action-picker.component.html',
  styleUrls: ['./action-picker.component.css']
})
export class ActionPickerComponent implements OnInit {
  current!: String;
  @Output() viewChanged = new EventEmitter<String>();
  constructor(private viewService: ViewService) { }

  ngOnInit(): void {
    this.current = this.viewService.getCurrentView();
  }

  changeView(view: String): void {
    this.viewService.setView(view);
    this.viewChanged.emit(view);
    this.current = view;
  }
}
