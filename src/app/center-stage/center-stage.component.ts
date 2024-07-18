import { Component, Input, OnInit } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'center-stage',
  templateUrl: './center-stage.component.html',
  styleUrls: ['./center-stage.component.css']
})
export class CenterStageComponent implements OnInit {
  // currentView!: String;
  @Input() currentView!: String;

  constructor(private viewService: ViewService) { }

  ngOnInit(): void {
    this.updateCurrentSong();
  }

  updateCurrentSong(): void {
    this.currentView = this.viewService.getCurrentView();
  }


}
