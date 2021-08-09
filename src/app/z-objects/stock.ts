import { Account, User, AddStock, Buy, Sell } from 'src/index';

export class Stock {
    private stock: string | any;
    private accountName: string | any;
    private shares: number | any;
    private avgPrice: number | any;
    private currentPrice: number | any;
    private cost: number | any;
    private perGainLoss: number | any;
    private profit: number | any;
    private total: number | any;
    private lastPur: string;
    private lastSold: string;

    //constructors arguments: Account, Addstock, instantiates new stock.
    constructor(account: Account, add: AddStock) {
        this.accountName = account.getAcctName();
        this.stock = add.getStock();
        this.shares = add.getShares();
        this.avgPrice = 0;
        this.currentPrice = 0;
        this.cost = 0;
        this.perGainLoss = 0;
        this.profit = 0;
        this.total = 0;
        this.lastPur = add.getPurDate();
        this.lastSold = "";
    }

    //getter methods for stock cl/ass.
    public getAcctName(): string | any {
        return this.accountName;
    }
    public getStockName(): string | any {
        return this.stock;
    }
    public getShares(): number | any {
        return this.shares;
    }
    public getAvgPrice(): number | any {
        return this.avgPrice;
    }
    public getCurrentPrice(): number | any {
        this.getCurrentPrice;
    }
    public getCost(): number | any {
        return this.cost;
    }
    public getPerGainLoss(): number | any {
        return this.perGainLoss;
    }
    public getProfit(): number | any {
        return this.profit;
    }
    public getTotal(): number | any {
        return this.getTotal;
    }

    //setter methods for stock class.
    public setAcctName(acctName: string): void {
        this.accountName = acctName;
    }
    public setStockName(stockName: string): void {
        this.stock = stockName;
    }
    public addShares(shares: number): void {
        this.shares = (this.shares + shares);
    }
    public setPurDate(curDate: string) {
        this.lastPur = curDate;
    }
    //subtracts the number of shares, else error message.
    public subtractShares(shares: number): void {
        if((this.shares - shares) >= 0) {
            this.shares = (this.shares - shares);
        }
        else {
            alert("You can't sell that much!" + "\n" +
                  "You only have: " + this.shares + " shares");
        }
    }

    //adds shares and updates stock when buying.
    public buyShares(buy: Buy): void {
        this.addShares(buy.getShares());
        this.addCost(buy.getPurPrice(), buy.getShares());
        this.calcAvgCost();
        this.calcTotal();
        this.calcProfit();

        let cur: Date = new Date();
        this.lastPur = cur.getDate() + "/" +cur.getMonth() + "/" + cur.getUTCFullYear;
    }
    //sells shares and updates stock when buying.
    public sellShares(sell: Sell): void {
        this.subtractShares(sell.getShares());
        this.addCost(sell.getSellPrice(), sell.getShares());
        this.calcAvgCost();
        this.calcTotal();
        this.calcProfit();

        let cur: Date = new Date();
        this.lastSold = cur.getDate() + "/" +cur.getMonth() + "/" + cur.getUTCFullYear;
    }
    //tallys the total cost of all shares bought.
    public addCost(priceBought: number, sharesBought: number): void {
        let addCost: any = sharesBought * priceBought;
        this.cost += addCost;
        this.calcAvgCost();
    }
    //subtracts sold cost from total cost & calls calcAvgCost() method.
    public subCost(sharesSold: number): void {
        let subCost: any = sharesSold * this.avgPrice;
        this.cost = this.cost - (this.cost * sharesSold);
        this.shares -= sharesSold;
        this.calcAvgCost();
    }
    //method to calulate the avergae cost.
    public calcAvgCost(): void {
        this.avgPrice = (this.cost / this.shares);
    }
    public setCurrentPrice(price: any): void {
        this.currentPrice = price;
    }
    //calculates the profit percentage (+ / -).
    public calcPerGainLoss(): void {
        let gainLoss: any = this.total - this.cost;

        this.perGainLoss = (gainLoss / this.cost);
    }
    //calculates the dollar profit amount (+ / -).
    public calcProfit(): void {
        this.calcTotal();
        this.profit = (this.total - this.cost);
    }
    //calculates the total amount of money from stock (+ / -).
    public calcTotal(): void {
        this.total = (this.shares * this.currentPrice);
    }

}