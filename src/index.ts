/*
Exports all component routes for each component,
when using these exports import them into appropriate
Typescript files and make sure to end object declaration
with src index; ex. import {} from 'src/index';
*/

//main application components.
export * from './app/app.component';
export * from './app/home/home.component';

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

//z-data-structure classes in alphabeltical order.
export * from './app/w-data-structures/linked-list';

//z-object classes in alphabeltical order.
`export * from './app/x-objects/account';
export * from './app/x-objects/add-stock';
export * from './app/x-objects/buy-shares';
export * from './app/x-objects/login';
export * from './app/x-objects/register';
export * from './app/x-objects/sell-shares';
export * from './app/x-objects/settings';
export * from './app/x-objects/stock';
export * from './app/x-objects/user'; `
export * from './app/x-objects/IAccount';
export * from './app/x-objects/IStock'

//services in alphabeltical order.
export * from './app/z-services/add-account.service';
export * from './app/z-services/add-stock.service';
export * from './app/z-services/port.service';

//app-routing module: always keep at the bottom of index.ts
export * from './app/app-routing.module';
