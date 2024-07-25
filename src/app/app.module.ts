import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ActionPickerComponent } from './action-picker/action-picker.component';
import { LibraryComponent } from './library/library.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { CenterStageComponent } from './center-stage/center-stage.component';
import { ChatViewComponent } from './center-stage/chat-view/chat-view.component';
import { HomeViewComponent } from './center-stage/home-view/home-view.component';
import { NowPlayingComponent } from './bottom-bar/now-playing/now-playing.component';
import { PlayerComponent } from './bottom-bar/player/player.component';
import { SoundControlComponent } from './bottom-bar/sound-control/sound-control.component';
import { LibraryItemComponent } from './library-item/library-item.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainScreenComponent },
      { path: 'callback', component: CallbackComponent },
      { path: 'login', component: LoginComponent },
      // { path: '**', redirectTo: 'main' },
    ]),
  ],

  declarations: [
    AppComponent,
    MainScreenComponent,
    ActionPickerComponent,
    LibraryComponent,
    BottomBarComponent,
    CenterStageComponent,
    ChatViewComponent,
    HomeViewComponent,
    NowPlayingComponent,
    PlayerComponent,
    SoundControlComponent,
    LibraryItemComponent,
    LoginComponent,
    CallbackComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
