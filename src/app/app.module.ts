import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'
import { AgmCoreModule } from '@agm/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './utilities/navbar/navbar.component';
import { FooterComponent } from './utilities/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { TrainingComponent } from './components/training/training.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CompanyComponent } from './components/company/company.component';

import { from } from 'rxjs';
import { PythonComponent } from './components/training/python/python.component';
import { PythonWithDjangoComponent } from './components/training/python-with-django/python-with-django.component';
import { DataScienceComponent } from './components/training/data-science/data-science.component';
import { MachineLearningComponent } from './components/training/machine-learning/machine-learning.component';
import { AiComponent } from './components/training/ai/ai.component';
import { DevopsComponent } from './components/training/devops/devops.component';
import { PowerBiComponent } from './components/training/power-bi/power-bi.component';
import { AboutComponent } from './components/about/about.component';
import { ContectComponent } from './components/company/contect/contect.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationComponent } from './components/certification/certification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    IndustriesComponent,
    TrainingComponent,
    TestimonialsComponent,
    CompanyComponent,
    PythonComponent,
    PythonWithDjangoComponent,
    DataScienceComponent,
    MachineLearningComponent,
    AiComponent,
    DevopsComponent,
    PowerBiComponent,
    AboutComponent,
    ContectComponent,
    BlogsComponent,
    ProjectsComponent,
    CertificationComponent,
    

  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBu3vkSWAqLf54iwGGIomrp2l8TuSkum9E'
    }),
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
