import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalDashboardComponent } from './components/portal-dashboard/portal-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from './components/resume/resume.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: PortalDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'resume', component: ResumeComponent},
      { path: 'chat', component: ChatComponent},
      { path: '', redirectTo: '/portal/home', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule // Add FormsModule to the imports array
  ],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

/*
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }

*/
