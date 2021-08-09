/*
Exports all component routes for each component,
when using these exports import them into appropriate
Typescript files and make sure to end object declaration
with src index; ex. import {} from 'src/index';
*/

//main application components.
export * from '../src/app/app.component';
export * from './app/home/home.component';

//front end components in alphabeltical order.
export * from '../src/app/accounts-page/accounts-page.component';
export * from '../src/app/add-account/add-account.component';
export * from '../src/app/add-stock/add-stock.component';
export * from '../src/app/donate/donate.component';
export * from '../src/app/home/home.component';
export * from '../src/app/login/login.component';
export * from '../src/app/menubar/menubar.component';
export * from '../src/app/menubar-user/menubar-user.component';
export * from '../src/app/mission/mission.component';
export * from '../src/app/register/register.component';
export * from '../src/app/request-service/request-service.component';
export * from '../src/app/settings/settings.component';
export * from '../src/app/trademark/trademark.component';

//z-data-structure classes in alphabeltical order.
export * from '../src/app/z-data-structures/linked-list';

//z-object classes in order in alphabeltical order.
export * from '../src/app/z-objects/account';
export * from '../src/app/z-objects/add-account';
export * from '../src/app/z-objects/add-stock';
export * from '../src/app/z-objects/buy-shares';
export * from '../src/app/z-objects/register';
export * from '../src/app/z-objects/sell-shares';
export * from '../src/app/z-objects/settings';
export * from '../src/app/z-objects/stock';
export * from '../src/app/z-objects/user';

//app-routing module: always keep at the bottom of index.ts
export * from '../src/app/app-routing.module';