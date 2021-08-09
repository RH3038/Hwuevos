export class Buy {
    private shares: number;
    private purPrice: number;
    private purDate: string;

    constructor(shares: number, purPrice: number) {
        //current date object.
        let cur = new Date();

        this.shares = shares;
        this.purPrice = purPrice;
        // "Day/Month/Year" format. (01/05/1999)
        this.purDate = cur.getDate() + "/" +cur.getMonth() + "/" + cur.getUTCFullYear;
    }

    public getShares(): number {
        return this.shares;
    }
    public getPurPrice(): number {
        return this.purPrice
    }
    public getPurDate(): string {
        return this.purDate;
    }
}