import { LinkedList, Stock, Account, 
         User } from 'src/index';

export class AddStock {
    private accountName: string;
    private stock: string;
    private shares: number;
    private purPrice: number;
    private purDate: string;

    constructor(account: Account, stock: string, shares: number, purPrice: number) {
        //current date object.
        let cur: Date = new Date();

        this.accountName = account.getAcctName();
        this.stock = stock;
        this.shares = shares;
        this.purPrice = purPrice;
        // "Day/Month/Year" format. (01/05/1999)
        this.purDate = cur.getDate() + "/" +cur.getMonth() + "/" + cur.getUTCFullYear;
    }

    //Getters for addstock class.
    public getAcctName(): any {
        return this.accountName;
    }
    public getStock(): any {
        return this.stock;
    }
    public getShares(): any {
        return this.shares;
    }
    public getPurPrice(): any {
        return this.purPrice
    }
    public getPurDate(): any {
        return this.purDate;
    }

    //Setters for addstock class.
    public setAcctName(accountName: string): void {
        this.accountName = accountName;
    }
    public setStock(stockName: string): void {
        this.stock = stockName;
    }
    public setShares(shares: number): void {
        this.shares = shares;
    }
    public setPurPrice(purPrice: number): void {
        this.purPrice = purPrice;
    }
    public setPurDate(purDate: string): void {
        this.purDate = purDate;
    }

}