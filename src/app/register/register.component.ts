import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm!: FormGroup;

  ngOnInit(): void {
    this.regForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      emailVerify: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      passwordVerify: new FormControl('', Validators.required),
      addAmount: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.regForm.value);
    this.regForm.reset();
  }

}


