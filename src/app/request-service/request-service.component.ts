import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService} from 'src/index';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css']
})
export class RequestServiceComponent implements OnInit {
  loggedIn!: boolean;
  requestForm!: FormGroup;

  messageHead: string = "Do you have a good idea?";

  message: string = 
  `If you have an idea for a service that you 
  would like to see on Hwuevos, please fill 
  out the form!`;

  constructor(private _store: StorageService) { }

  ngOnInit(): void {

    this.loggedIn = this._store.sessionGet("LoggedIn");

    this.requestForm = new FormGroup({

    request: new FormControl('', Validators.required)

    });

  }

  onSubmit() {

    console.log(this.requestForm.value);

    this.requestForm.reset();
    
  }

}
