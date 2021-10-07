import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { TrainingComponent } from './components/training/training.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CompanyComponent } from './components/company/company.component';
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


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'industries',component:IndustriesComponent},
  {path: 'training', component:TrainingComponent},
  {path: 'testimonials', component:TestimonialsComponent},
  {path: 'company', component:CompanyComponent},
  {path: 'python', component:PythonComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContectComponent},
  {path: 'blogs', component:BlogsComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'certification', component:CertificationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
