import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [

  {
		path:'',
		component: DashboardComponent,
		children: [
      {
				path:'',
				component: HomepageComponent,
			},
		],
    canActivate:[AuthGuard]
    
	},

	{
		path:'',
		component: AuthComponent,
		children: [
			{path: '', redirectTo: 'login', pathMatch: 'full'},
			{path: 'login', component: LoginComponent},
		]
	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
