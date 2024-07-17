import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainScreenScomponentComponent } from './main-screen-scomponent/main-screen-scomponent.component';
import { ActionPickerComponent } from './action-picker/action-picker.component';
import { LibraryComponent } from './library/library.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { CenterStageComponent } from './center-stage/center-stage.component';
import { ChatViewComponent } from './center-stage/chat-view/chat-view.component';
import { HomeViewComponent } from './center-stage/home-view/home-view.component';
import { NowPlayingComponent } from './bottom-bar/now-playing/now-playing.component';
import { PlayerComponent } from './bottom-bar/player/player.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainScreenScomponentComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    MainScreenScomponentComponent,
    ActionPickerComponent,
    LibraryComponent,
    BottomBarComponent,
    CenterStageComponent,
    ChatViewComponent,
    HomeViewComponent,
    NowPlayingComponent,
    PlayerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
