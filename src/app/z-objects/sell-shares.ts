export class Sell {
    private shares: number;
    private sellPrice: number;
    private sellDate: string;

    constructor(shares: number, sellPrice: number) {
        let cur = new Date();

        this.shares = shares * -1;
        this.sellPrice = sellPrice;
        // "Day/Month/Year" format. (01/05/1999)
        this.sellDate = cur.getDate() + "/" +cur.getMonth() + "/" + cur.getUTCFullYear;
    }

    public getShares(): number {
        return this.shares;
    }
    public getSellPrice(): number {
        return this.sellPrice
    }
    public getSellDate(): string {
        return this.sellDate;
    }
}