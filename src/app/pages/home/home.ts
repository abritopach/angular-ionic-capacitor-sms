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
  isWeb: string;
  defaultPlatform = 'nexmo';

  constructor(private platform: Platform, private formBuilder: FormBuilder) {
    this.createForm();
    this.isWeb = Capacitor.platform;
    if (Capacitor.platform === 'web') {
      this.testPluginWeb();
      this.configSMSWeb();
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
      message: new FormControl('', Validators.required),
      platform: new FormControl(this.defaultPlatform, Validators.required)
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
    const smsForm = this.smsForm.value;
    const result = await SMSWeb.sendSMS({number: smsForm.phoneNumber.toString(), message: smsForm.message });
    console.log('result', result);
  }

  async testPluginNative() {

    const { SMS } = Plugins;

    const result = await SMS.echo({value: 'hola' });
    console.log('result', result);
  }

  async sendSMSNative() {

    const { SMS } = Plugins;

    const smsForm = this.smsForm.value;

    const result = await SMS.sendSMS({number: smsForm.phoneNumber.toString(), message: smsForm.message });
    console.log('result', result);
  }

  async configSMSWeb() {
    console.log('HomePage::configSMSWeb | method called');
    const result = await SMSWeb.configEndpoint({endpoint: 'https://ebf59238.ngrok.io', platform: this.defaultPlatform });
    console.log('result', result);
  }

  selectedPlatform(value) {
    console.log('HomePage::selectedPlatform | method called', value);
    this.defaultPlatform = value;
    this.configSMSWeb();
  }

}
