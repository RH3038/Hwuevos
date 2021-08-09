import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent,
         LoginComponent,
         MissionComponent,
         DonateComponent,
         RequestServiceComponent,
         RegisterComponent,
         AccountsPageComponent,
         AddAccountComponent,
         AddStockComponent,
         SettingsComponent } from 'src/index';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login' }},
  {path: 'mission', component: MissionComponent, data: {title: 'Mission'}},
  {path: 'donate', component: DonateComponent, data: {title: 'Donate'}},
  {path: 'request-service', component: RequestServiceComponent, data: {title: 'Request Service'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'add-account', component: AddAccountComponent, data: {title: 'Add Account'}},
  {path: 'add-stock', component: AddStockComponent, data: {title: 'Add Stock'}},
  {path: 'accounts-page', component: AccountsPageComponent, data: {title: 'Accounts Page'}},
  {path: 'settings', component: SettingsComponent, data: {title: 'Settings'}},

  //redirect to landing page
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
