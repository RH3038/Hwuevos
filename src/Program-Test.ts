import {
    Account, AddAccount, AddStock, 
    Buy, Sell, Settings, Stock, 
    User, LinkedList
} from './index';


let addAccount: AddAccount = new AddAccount("Retirement", 1000);
let account: Account = new Account(addAccount);

console.log(account);