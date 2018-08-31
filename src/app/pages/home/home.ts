import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { Platform } from '@ionic/angular';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Plugins, Capacitor } from '@capacitor/core';
import { SMSWeb } from 'capacitor-sms';

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
    if (Capacitor.platform === 'web') {
      this.testPluginWeb();
    } else { // Native
      this.testPluginNative();
    }
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
    if (Capacitor.platform === 'web') {
      this.sendSMSWeb();
    } else { // Native
      this.sendSMSNative();
    }
  }

  async testPluginWeb() {
    console.log('HomePage::testPluginWeb | method called');
    const result = await SMSWeb.echo({value: 'hola' });
    console.log('result', result);
  }

  async sendSMSWeb() {
    console.log('HomePage::sendSMS | method called');
    const result = await SMSWeb.sendSMS({number: '123456789', message: 'hola' });
    console.log('result', result);
  }

  async testPluginNative() {

    const { SMS } = Plugins;

    const result = await SMS.echo({value: 'hola' });
    console.log('result', result);
  }

  async sendSMSNative() {

    const { SMS } = Plugins;

    const result = await SMS.sendSMS({number: '123456789', message: 'hello' });
    console.log('result', result);
  }

}
