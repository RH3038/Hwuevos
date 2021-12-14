import { NgModule } from '@angular/core';
import { RouterModule, 
         Routes } from '@angular/router';
import { HomeComponent, LoginComponent, MissionComponent,
         DonateComponent, RequestServiceComponent, RegisterComponent,
         AccountsPageComponent, AddAccountComponent, AccountSummaryComponent,
         StockSummaryComponent, StockPageComponent, AddStockComponent,
         SettingsComponent, AccountResolver, StockResolver,
         SummaryResolver} from 'src/index';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login' }},
  {path: 'mission', component: MissionComponent, data: {title: 'Mission'}},
  {path: 'donate', component: DonateComponent, data: {title: 'Donate'}},
  {path: 'request-service', component: RequestServiceComponent, data: {title: 'Request Service'}},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'add-account', component: AddAccountComponent, data: {title: 'Add Account'}},
  {path: 'add-stock', component: AddStockComponent, data: {title: 'Add Stock'}},
  {path: 'accounts-page/:id', component: AccountsPageComponent, resolve: {accounts: AccountResolver}, data: {title: 'Accounts Page'}},
  {path: 'stock-page/:id', component: StockPageComponent, resolve: {stocks: StockResolver}, data: {title: 'Stock Page'}},
  {path: 'account-summary', component: AccountSummaryComponent, data: {title: 'Account Summary'}},
  {path: 'stock-summary/:id', component: StockSummaryComponent, resolve: {summary: SummaryResolver}, data: {title: 'Account Summary'}},
  {path: 'settings', component: SettingsComponent, data: {title: 'Settings'}},


  //redirect to landing page
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
