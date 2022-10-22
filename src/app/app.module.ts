import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawResultComponent } from './components/draw-result/draw-result.component';
import { DrawGameComponent } from './components/draw-game/draw-game.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawResultComponent,
    DrawGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
