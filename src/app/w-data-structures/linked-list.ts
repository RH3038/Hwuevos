export class ObjNode<T> {
	private id: number;
	private data: T;
	private next: ObjNode<T> | any;
	private prev: ObjNode<T> | any;

	constructor(data: any) {
		this.id = NaN;
		this.data = data;
		this.next = null;
		this.prev = null;
	}
	//getter methods for class field.
	public getId(): number {
		return this.id;
	}
	public getData(): T {
		return this.data;
	}
	public getNext(): ObjNode<T> | null {
		return this.next;
	}
	public getPrev(): ObjNode<T> | null {
		return this.prev;
	}
	//setter methods for class field.
	public setId(id: number): void {
		this.id = id;
	}
	public setData(data: T): void {
		this.data = data;
	}
	public setNext(node: ObjNode<T>): void {
		this.next = node;
	}
	public setPrev(node: ObjNode<T>): void {
		this.prev = node;
	}
}

/*
Object: Linked-List;
Type: Generic;
Vars: len(number), head(ObjNode<T>), tail(ObjNode<T>);
Description: Creates a linked-list that stores
			 nodes inside, first node will be
             initialized as the head and the 
             last node will be the tail.
*/
export class LinkedList<T> {
	private len: number;
	private head: ObjNode<T> | any;
	private tail: ObjNode<T> | any;

	constructor() {
		this.len = 0;
		this.head = null;
		this.tail = null;
	}
	//getter methods for class field.
	public getLength(): number {
		return this.len;
	}
	public getHead(): ObjNode<T> | any {
        let head: any;

		return this.head;
        
	}
	public getTail(): ObjNode<T> | any {
        let tail: any;

		return this.tail;
	}
	//setter methods for class field.
	private setLength(num: number): void {
		this.len = num;
	}
	public setHead(object: ObjNode<T>): void {
		this.head = object;
	}
	public setTail(object: ObjNode<T>): void {
		this.tail = object;
	}
	/*
		Appends node to end of linked-list chain.
		Updates length of linked-list.
		Then sets the id's for each object.
	*/
	public append(data: T): void {
		let newNode: any = new ObjNode<T>(data);
		let curNode: any;

		//if: list empty append, set head & tail.
		if(!this.head) {
			this.head = newNode;
			this.head.prev = null;
			this.tail = newNode;
			this.tail.next = null;
            this.len++;
		}
		//else: append to end of list.
		else {
			curNode = this.tail;
			
			curNode.next = newNode;
			newNode.prev = curNode;
			newNode.next = null;
			this.tail = newNode;
			this.len++;
		}
		this.setIds();
	}
	/*
		Prepends node to beginning of linked-list chain.
		Updates length of linked-list.
		Then sets the id's for each object.
	*/
	public prepend(data: T): void {
		let newNode: any = new ObjNode<T>(data);
		let curNode: any;

		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
            this.len++;
		}
		else {
			curNode = this.head;
			newNode.next = curNode;
			curNode.prev = newNode;
			this.head = newNode;
			this.tail = curNode;
            this.len++;
		}
		this.setIds();
	}
	/*
		Inserts node into specified slot in linked-list.
		If: slot is less than list length then node is
		prepended to list.
		If: slot is greater than list length then node
		is appended to list.
		Else: node will be added into specified slot.
		Updates length of linked-list.
		Then sets the id's for each object.
	*/
	public insert(data: T, slot: number): void {
		let newNode: any = new ObjNode<T>(data);
		let curNode: any;
		let slotNode: any;

		//if: slot > len, error message
        if(slot > this.len) {
            console.log("cannot insert: slot is too large!");
            console.log("list size: " + this.len);
        }
		//if: slot = 0, error message.
		else if(slot == 0) {
            console.log("cannot insert: 0 is not a valid slot number!");
            console.log("list size: " + this.len);
        }
		//if: slot < 0, error message.
		else if(slot < 0) {
            console.log("cannot insert: slot is too small!");
            console.log("list size: " + this.len);
        }
		//else: perform insert operation.
        else {
            //if: no head then set head.
            if(this.head == null) {
                this.head = newNode;
                this.tail = newNode;
            }
            //if: slot & length equal 1 insert in 1st position.
            else if(slot == 1 && this.len == 1) {
                curNode = this.head;
                newNode.next = curNode;
                curNode.prev = newNode;
                this.head = newNode;	
                this.tail = curNode;
            }
            //if: slot = 1 & length > 1 then insert in 1st slot.
            else if(slot == 1 && this.len > 1) {
                curNode = this.head;
                newNode.next = curNode;
                curNode.prev = newNode;
                this.head = newNode;
            }        
            //else: insert into specified slot.
            else {
				curNode = this.head;

				while(curNode.next) {
					curNode = curNode.next;
					
					if(curNode.getId() == slot) {
						slotNode = curNode;
                	}
				}
				slotNode.prev.next = newNode;
				newNode.prev = slotNode.prev;
				newNode.next = slotNode;
				slotNode.prev = newNode;
            }
            this.setIds();
        }
    }
	/*
		Removes node from specified slot index.
		If: length <= 1 then head & tail = null.
		Else: last node removed from list.
	*/
	public remove(): ObjNode<T>;
	public remove(slot: number): ObjNode<T> | any;
	public remove(slot?: number): ObjNode<T> | any {
		let curNode: any;
		let returnNode: any;

		//if: slot = undefined, remove() selected;
		if(slot === undefined) {
			
			//if: len = 0 then do nothing.
			if(this.len == 0) {
				console.log("cannot remove node list empty");
			}
			//if: len = 1 remove last node.
			else if(this.len == 1) {
				returnNode = this.head;
				this.head = null;
				this.tail = null
				this.len--;
			}
			//else: removes last index node, adjusts tail.
			else {
				returnNode = this.tail;
				this.tail = returnNode.prev;
				this.tail.next = null;
				this.len--;
			}
			this.setIds();	
			return returnNode;
		}
			
		//else: slot = defined , remove(slot) selected;
		else {

		   //if: slot > len, error message.
			if(slot > this.len) {
            	console.log("cannot remove: slot is too large!");
            	console.log("list size: " + this.len);
            }
			//if: slot = 0, error message.
			else if(slot == 0) {
            	console.log("cannot remove: 0 is not a valid slot number!");
            	console.log("list size: " + this.len);
        	}
			//if: slot < 0, error message.
			else if(slot < 0) {
            	console.log("cannot remove: slot is too small!");
            	console.log("list size: " + this.len);
        	}
            //if: slot = len then remove last node.
			else if(slot == this.len) {
				this.remove();
			}
			//if: slot = 1 remove 1st node, set head.
			else if(slot == 1) {
				returnNode = this.head;

				curNode = this.head;
				this.head = curNode.next;
				curNode.next.prev = null;
				curNode.next = null;
			}
			else {
				curNode = this.head;

				while(curNode.next) {
					curNode = curNode.next;

					if(slot == curNode.getId()) {
						returnNode = curNode;		
					}
				}
				returnNode.prev.next = returnNode.next;
				returnNode.next.prev = returnNode.prev;
				this.len--;
			}
		}
		this.setIds();
		return returnNode;
	}
	/*
		Looks for and returns node from specified slot.
		If: index = 1 & length >= 1 then returns slot
			one node.
		If: index slot doesn't exist then null node is 
			returned and error message printed.
		Else: node in specified slot will be returned.
	*/
	public getIndex(index: number): ObjNode<T> | any {
		let curNode: any;
        let returnNode: any;

		//if: index = 0, < 1, > len, error message, return null.
		if(index < 0 || index > this.len || index == 0) {
			console.log("cannot index: index doesn't exist");
			console.log("list size: " + this.len);
			returnNode = null;
		}
		//if: index = 1 & len >= 1, return head node.
		else if(index == 1 && this.len >= 1) {
			returnNode = this.head;
		}
		//else: get the specified index.
		else {
			curNode = this.head;
			
			while(curNode.next) {
				curNode = curNode.next;
	
				if(curNode.getId() == index) {
					returnNode = curNode;
				}
			}
		}

        return returnNode;
	}
	
	/*
		sets the ids from 1 to n for length of list.
	*/
	public setIds() {
		let curNode: any;
		let increment: number = 1;

		//if: len > 0, increment list.
		if(this.len > 0) {
			curNode = this.head; 
			curNode.setId(increment);
			
			while(curNode.next) {
				curNode = curNode.next;
				increment++;
				curNode.setId(increment);
			}
		}
		//else: error message.
		else {
			console.log("cannot increment: list empty!");
            console.log("list size: " + this.len);
		}
	}
	/*
		Prints out linked-list object information.
	*/
	public printAll(): void {
		let curNode: any;

		//if: len > 0, print list data.
		if(this.len > 0) {
			curNode = this.head;
			
			console.log(curNode.data);
			
			while(curNode.next) {
				curNode = curNode.next;
				console.log(curNode.data);
			}
		}
		//else: error message.
		else {
			this.len = 0;
			console.log("cannot print: list empty");
		}
	}
}