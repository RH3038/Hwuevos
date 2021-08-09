import { LinkedList, Stock, 
         User, AddStock, } from 'src/index';

export class Settings{
    private email: string;
    private verEmail: string;
    private password: string;
    private verPassword: string;
    private addSubAmount: number;
    private delAccount: string;

    constructor() {
        this.email = "";
        this.verEmail = "";
        this.password = "";
        this.verPassword = "";
        this.addSubAmount = 0;
        this.delAccount = "";
    }

    //getters for settings class.
    public getEmail(): any {
        return this.email;
    }
    public getVerEmail(): any {
        return this.verEmail;
    }
    public getPassword(): any {
        return this.password;
    }
    public getVerPassword(): any {
        return this.verPassword;
    }
    public getAddSub(): any {
        return this.addSubAmount;
    }
    public getDelAccount(): any {
        return this.delAccount;
    }

    //setters for settings class.
    public setEmail(email: string): void {
        this.email = email;
    }
    public setVerEmail(verEmail: string): void {
        this.verEmail = verEmail;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
    public setVerPassword(verPassword: string): void {
        this.verPassword = verPassword;
    }
    public setAddSub(addsubAmount: number): void {
        this.addSubAmount = addsubAmount;
    }
    public setDelAccount(delAccount: string): void {
        this.delAccount = delAccount;
    }
}