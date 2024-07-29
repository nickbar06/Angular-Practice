import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'center-stage',
  templateUrl: './center-stage.component.html',
  styleUrls: ['./center-stage.component.css']
})
export class CenterStageComponent implements OnInit {
  @Input() currentView!: String;
  @Output() viewChanged = new EventEmitter<string>();

  constructor(private viewService: ViewService) { }

  ngOnInit(): void {
    this.updateCurrentSong();
  }

  updateCurrentSong(): void {
    this.currentView = this.viewService.getCurrentView();
  }

  onViewChanged(view: string): void {
    this.viewChanged.emit(view);
  }
}
