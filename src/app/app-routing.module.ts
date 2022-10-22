import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawGameComponent } from './components/draw-game/draw-game.component';
import { DrawResultComponent } from './components/draw-result/draw-result.component';

const routes: Routes = [
  {path: 'home', component: DrawGameComponent },
  {path: 'result', component: DrawResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
