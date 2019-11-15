import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-say-hello-navigation',
  templateUrl: './say-hello-navigation.component.html',
  styleUrls: ['./say-hello-navigation.component.css']
})
export class SayHelloNavigationComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  helpForm: FormGroup;

  ngOnInit() {
    this.helpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    const message1: string = this.helpForm.get('message').value;
    const name1: string = this.helpForm.get('name').value;
    const email1: string = this.helpForm.get('email').value;
    const messageObject = { message: message1, email: email1, name: name1 };
    console.log(messageObject);
    this.messageService.sendMessage(messageObject);
    this.resetForm();
  }

  resetForm() {
    console.log('resetForm clicked');
    this.helpForm.reset();
  }

  get name() {
    return this.helpForm.get('name');
  }

  get email() {
    return this.helpForm.get('email');
  }

  get message() {
    return this.helpForm.get('message');
  }

  formValidated() {
    return this.helpForm.valid;
  }
}
