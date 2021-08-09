import { LinkedList, Stock, User, AddAccount} from 'src/index';

export class Account {
    private accountName: String = "";
    private addedFunds: number = 0;
    private perGainLoss: number = 0;
    private profit: number = 0;
    private total: number = 0;
    private stockList: LinkedList<Stock>;
    
    constructor(addAccount: AddAccount) {
        this.accountName = addAccount.getAcctName();
        this.addedFunds = addAccount.getAddAmount();
        this.perGainLoss = 0;
        this.profit = 0;
        this.total = 0;
        this.stockList = new LinkedList<Stock>();
    }

    //getters for account calss.
    public getAcctName(): any {
        return this.accountName;
    }
    public getAddedFunds(): any {
        return this.addedFunds;
    }
    public getPerGainLoss(): any {
        return this.perGainLoss;
    }
    public getProfit(): any {
        return this.profit;
    }
    public getTotal(): any {
        return this.total;
    }
    //setters for account class.
    public setAcctName(accountName: String): void {
        this.accountName = accountName;
    }
    public setAddedFunds(addedFunds: number): void {
        this.addedFunds = addedFunds;
    }
    public calcPerGainLoss(): void {
        let listTotal: any = this.getListTotal(this.stockList);
        let listCost: any = this.getListCost(this.stockList);

        this.perGainLoss = (listTotal - listCost) / listCost;
    }
    public calcProfit(): void {
        let listTotal: any = this.getListTotal(this.stockList);
        let listCost: any = this.getListCost(this.stockList);

        this.profit = listTotal - listCost;
    }
    public calcTotal(): void {
        
        this.total = this.getListTotal(this.stockList);
    }
    public addStock(stock: Stock): void {
        this.stockList.append(stock);;
    }

    //private methods 
    private getListTotal(stockList:LinkedList<Stock>): any {
        let list = stockList;
        let curNode: any;
        let total: any;

        if(stockList.getLength() >= 1) {
            curNode = stockList.getHead();
            total += curNode.getTotal();

            while(curNode = curNode.getNext()) {
                curNode = curNode.getNext();
                total += curNode.getTotal();
            }

        }
        else {
            total = this.total;
        }
        return total;
    }
    //gets the total cost of all stocks in stock list.
    private getListCost(stockList:LinkedList<Stock>): any {
        let list: LinkedList<Stock> = stockList;
        let curNode: any;
        let cost: any;

        if(stockList.getLength() >= 1) {
            curNode = stockList.getHead();
            cost += curNode.getCost();

            while(curNode = curNode.getNext()) {
                curNode = curNode.getNext();
                cost += curNode.getTotal();
            }

            return cost;
        }
        else {
            cost = 0;
        }
        return cost;
    }
    //finds stock with specified name and returns it, else returns null.
    public findStock(name: string): Stock {
        let stockNode: any = this.stockList.getHead();
        let returnNode: any;

        if(stockNode.getData().getStockName().toLowerCase()
		   == name.toLowerCase()) {
            returnNode = stockNode;
        }
        else {
            while(stockNode.getNext()) {
                stockNode = stockNode.getNext();

                if(stockNode.getData().getStockName().toLowerCase() 
				   == name.toLowerCase()) {
                    returnNode = stockNode;
                }
                else {
					returnNode = null;
                }
            }
        }
        return returnNode;
    }
    //finds the stock symbol specified and removes it.
    public removeStock(name: string): void {
        let index: number;
        let returnNode: any;
        let stockName: string = name;
        
        returnNode = this.findStock(name);
        index = returnNode.getId();
        return this.stockList.remove(index);
    }

}