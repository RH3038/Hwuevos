export class AddAccount {
    private acctName: string;
    private addAmount: number;

    constructor(acctName: string, addAmount: number) {
        this.acctName = acctName;
        this.addAmount = addAmount;
    }

    public getAcctName(): string {
        return this.acctName;
    }
    public getAddAmount(): number {
        return this.addAmount;
    }
}