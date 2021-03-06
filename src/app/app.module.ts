import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Imports from index.ts for simpler component imports 
import { AppRoutingModule, AppComponent, HomeComponent,
         LoginComponent, RegisterComponent, MenubarComponent,
         MenubarUserComponent, MissionComponent, TrademarkComponent,
         RequestServiceComponent, DonateComponent, AddStockComponent,
         SettingsComponent, AddAccountComponent, AccountsPageComponent,
         AccountSummaryComponent, StockSummaryComponent, AccountService, 
         StockService, PortService, StockPageComponent,  
         ConfigService, AddUserService, StorageService,
         LoginService } from 'src/index';
import { MenubarTwoComponent } from './menubar-two/menubar-two.component';   

//Angular Modules: components, please make sure component routes are set in index.ts
@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent,
    MenubarComponent, MenubarUserComponent, TrademarkComponent,
    MissionComponent, DonateComponent, RequestServiceComponent,
    RegisterComponent, AddStockComponent, SettingsComponent,
    AddAccountComponent, AccountsPageComponent, AccountSummaryComponent,
    StockSummaryComponent, StockPageComponent, MenubarTwoComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, 
    HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    LoginComponent, RegisterComponent
  ],
  providers: [
    [BrowserModule], [HttpClientModule], [AccountService],
    [StockService], [AddUserService], [PortService], 
    [ConfigService], [StorageService], [StockService],
    [LoginService]
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
