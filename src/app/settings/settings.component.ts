import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  resetEmail!: string;
  verifyEmail!: string;
  resetPassword!: string;
  verifyPassword!: string;
  addSub!: number;
  delAccount!: string;

  constructor() {
    this.resetEmail = "";
    this.verifyEmail = "";
    this.resetPassword = "";
    this.verifyPassword = "";
    this.addSub = 0;
    this.delAccount = "";
  }

  settingsForm!: FormGroup;

  ngOnInit(): void {
    this.settingsForm = new FormGroup({
      resetEmail: new FormControl('', Validators.required),
      verifyEmail: new FormControl('', Validators.required),
      resetPassword: new FormControl('', Validators.required),
      verifyPassword: new FormControl('', Validators.required),
      delAccount: new FormControl('', Validators.required),
    });

  }

  onSubmit() {
    this.settingsForm.reset();
  }
}
