import { LinkedList, Account, Register,
         Stock } from 'src/index';


export class User {
    private firstName: String;
    private lastName: String;
    private email: String;
    private addedFunds: number;
    private fundsAvailable: number;
    private accountsHeld: number;
    private perGainLoss: number;
    private profit: number;
    private acctList: LinkedList<Account>;

    constructor(register: Register, firstName: String, lastName: String) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = register.getEmail();
        this.addedFunds = 0;
        this.fundsAvailable = 0;
        this.accountsHeld = 0;
        this.perGainLoss = 0;
        this.profit = 0;
        this.acctList = new LinkedList<Account>();
    }

    // getters for user class.
    public getFirstName() {
        return this.firstName;
    }
    public getLastName() {
        return this.lastName;
    }
    public getEmail() {
        return this.email;
    }

    //setters for user class.
    public setFirstName(firstName: String) {
        this.firstName = firstName;
    }
    public setLastName(lastName: String) {
        this.lastName = lastName;
    }
    public setEmail(email: String) {
        this.email = email;
    }

    //private methods for user class.

    //finds account by name: string in list and returns node else returns null;
    public findAccount(name: string): any {
        let curNode: any = this.acctList.getHead();
        let returnNode: any = null;
        let stockName: string = name;

        //compare lowercase account name & searched name, return node.
        if(curNode.getAccountName().toLowerCase() == name.toLowerCase()) {
            returnNode = curNode;
        }
        else {
            while(curNode.getNext()) {
                curNode = curNode.getNext();

                //compare lowercase account name & searched name, return node.
                if(curNode.getAccountName().toLowerCase() == name.toLowerCase()) {
                    returnNode = curNode;
                }
            }
        }

        return returnNode;
    }
    //finds the account specified and removes it.
    public removeAccount(name: string): Account {
        let index: number;
        let returnNode: any;
        let stockName: string = name;
        
        //store returned node from find account, null if not found.
        returnNode = this.findAccount(name);
        index = returnNode.getId();
        return this.acctList.remove(index);
    }
}