import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Imports from index.ts for simpler component imports 
import { AppRoutingModule,
         AppComponent,
         HomeComponent,
         LoginComponent,
         RegisterComponent,
         MenubarComponent,
         MenubarUserComponent,
         MissionComponent,
         TrademarkComponent,
         RequestServiceComponent,
         DonateComponent,
         AddStockComponent,
         SettingsComponent,
         AddAccountComponent,
         AccountsPageComponent } from 'src/index';

         

//Angular Modules: components, please make sure component routes are set in index.ts
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenubarComponent,
    MenubarUserComponent,
    TrademarkComponent,
    MissionComponent,
    DonateComponent,
    RequestServiceComponent,
    RegisterComponent,
    AddStockComponent,
    SettingsComponent,
    AddAccountComponent,
    AccountsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
