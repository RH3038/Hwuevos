export class Register {
    firstName: string;
    lastName: string;
    email: string;

    constructor(first: string, last: string, email: string) {
        this.firstName = first;
        this.lastName = last;
        this.email = email;
    }

    //getter methods for register class.
    public getFirst() {
        return this.firstName;
    }
    public getLast() {
        return this.lastName;
    }
    public getEmail(): any {
        return this.email;
    }

}