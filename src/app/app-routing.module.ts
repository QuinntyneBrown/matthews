import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClaimsLitigationComponent } from './claims-litigation/claims-litigation.component';
import { ConstructionActComponent } from './construction-act/construction-act.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContractsComponent } from './contracts/contracts.component';
import { PeopleComponent } from './people/people.component';
import { RecentCasesComponent } from './recent-cases/recent-cases.component';
import { ResourcesComponent } from './resources/resources.component';
import { WebinarsComponent } from './webinars/webinars.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'claims-litigation',
    component: ClaimsLitigationComponent
  },
  {
    path: 'construction-act',
    component: ConstructionActComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'contracts',
    component: ContractsComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'recent-cases',
    component: RecentCasesComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'webinars',
    component: WebinarsComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
