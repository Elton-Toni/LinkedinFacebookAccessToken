import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './components/facebook/facebook.component';
import { HomeComponent } from './components/home/home.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';

const routes: Routes = [
  { path: 'linkedin', component: LinkedinComponent },
  { path: 'facebook', component: FacebookComponent },
  
  { path: '',  component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent, pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
