import { Injectable } from '@angular/core';
import { IAccount } from 'src/index'

@Injectable({
    providedIn: 'root'
})
export class StorageService {
  
    constructor() {

    }

    // Session storage methods.
    public sessionSet(key: string, value: any): void {

        try {

            sessionStorage.setItem(key, JSON.stringify(value));

        }catch(err) {

            console.log("Error: could not save to sessionStroage");

        }

    }
    public sessionGet(key: string): any {

        try {
            
            return JSON.parse(sessionStorage.getItem(key) as string) ;

        }catch(err) {

            console.log("Error: could get object from sessionStroage");
            
        }

    }
    public sessionRemove(key: string): void {

        try {

            return sessionStorage.removeItem(key);

        }catch(err) {

            console.log("Error: could not remove object from sessionStroage");
            
        }

    }

    // Local storage methods.
    public localSet(key: string, value: any): void {

        try {

            localStorage.setItem(key, JSON.stringify(value));

        }catch(err) {

            console.log("Error: could not save to sessionStroage");

        }

    }
    public localGet(key: string): any {

        try {

            return JSON.parse(localStorage.getItem(key) as string);

        }catch(err) {

            console.log("Error: could get object from sessionStroage");
            
        }

    }
    public localRemove(key: string): void {

        try {

            return localStorage.removeItem(key);

        }catch(err) {

            console.log("Error: could not remove object from sessionStroage");
            
        }
        
    }

}