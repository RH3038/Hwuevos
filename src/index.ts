/*
Exports all component routes for each component,
when using these exports import them into appropriate
Typescript files and make sure to end object declaration
with src index; ex. import {} from 'src/index';
*/

//main application components.
export * from './app/app.component';

//front end components in alphabeltical order.
export * from './app/accounts-page/accounts-page.component';
export * from './app/stock-page/stock-page.component';
export * from './app/account-summary/account-summary.component'
export * from './app/add-account/add-account.component';
export * from './app/add-stock/add-stock.component';
export * from './app/donate/donate.component';
export * from './app/home/home.component';
export * from './app/login/login.component';
export * from './app/menubar/menubar.component';
export * from './app/menubar-user/menubar-user.component';
export * from './app/mission/mission.component';
export * from './app/register/register.component';
export * from './app/request-service/request-service.component';
export * from './app/settings/settings.component';
export * from './app/stock-page/stock-page.component';
export * from './app/stock-summary/stock-summary.component';
export * from './app/trademark/trademark.component';

//w-interfaces in alphabeltical order.
export * from './app/w-interfaces/IAccount';
export * from './app/w-interfaces/ILogin';
export * from './app/w-interfaces/IStock';
export * from './app/w-interfaces/IUser';
export * from './app/w-interfaces/ISummary';

//x-services in alphabeltical order.
export * from './app/x-services/account.service';
export * from './app/x-services/stock.service';
export * from './app/x-services/user.service';
export * from './app/x-services/config.service';
export * from './app/x-services/port.service';
export * from './app/x-services/storage.servcie';
export * from './app/x-services/login.service';
export * from './app/x-services/summary.service';

//z-resolvers in alphabetical order.
export * from './app/z-resolvers/account.resolve';
export * from './app/z-resolvers/stock.resolve';
export * from './app/z-resolvers/summary.resolve';

//app-routing module: always keep at the bottom of index.ts
export * from './app/app-routing.module';
