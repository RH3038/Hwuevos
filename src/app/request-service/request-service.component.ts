import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css']
})
export class RequestServiceComponent implements OnInit {

  requestForm!: FormGroup;

  messageHead: string = "Do you have a good idea?";

  message: string = 
  `If you have an idea for a service that you 
  would like to see on Hwuevos, please fill 
  out the form!`;

  constructor() { }

  ngOnInit(): void {
    this.requestForm = new FormGroup({
    request: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.requestForm.value);
    this.requestForm.reset();
  }

}
