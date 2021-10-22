import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component ({ selector: 'app-root', templateUrl: 'app.component.html'})
export class AppComponent implements OnInit{

    title(title: any) {
      throw new Error('Method not implemented.');
    }

    constructor(private titlepage:Title) {}

    setTitle(title:string) {
        this.titlepage.setTitle(title);
    }

    ngOnInit() {

    }
    
}