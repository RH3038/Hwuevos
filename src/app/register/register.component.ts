import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser, AddUserService} from 'src/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm!: FormGroup;

  constructor(private _user: AddUserService) {}

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

    var user: IUser = {}
    user.first = this.regForm.controls.firstName.value;
    user.last = this.regForm.controls.lastName.value;
    user.email = this.regForm.controls.email.value;
    user.password = this.regForm.controls.password.value;
    user.amount = this.regForm.controls.addAmount.value;

    this._user.addUser(user).subscribe();

    //this.regForm.reset();
  }

}


