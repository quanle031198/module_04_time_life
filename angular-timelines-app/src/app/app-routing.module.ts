import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent

  },
  {
    path:'home',
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
