import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { VideoComponent } from './components/video/video.component';
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

/* Routes */

const routes: Routes = [
  { path: 'home',        component: HomeComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'portfolio',        component: PortfolioComponent },
  { path: 'contact',        component: ContactComponent },
  { path: 'news',        component: NewsComponent },
  { path: 'services',        component: ServicesComponent },
  { path: 'skills',        component: SkillsComponent },
  { path: 'video',        component: VideoComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
