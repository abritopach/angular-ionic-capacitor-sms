import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-page-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  currentYear: number;
  smsForm: FormGroup;

  constructor(private platform: Platform, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

  createForm() {
    this.smsForm = this.formBuilder.group({
      phoneNumber: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  smsFormSubmit() {
    console.log('HomePage::smsFormSubmit | method called');
    console.log(this.smsForm.value);
  }

}
