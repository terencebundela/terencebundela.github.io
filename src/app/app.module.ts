import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const pageRoutes:Routes=[
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contact', component: ContactComponent},
  { path: '**', redirectTo: '' }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(pageRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
