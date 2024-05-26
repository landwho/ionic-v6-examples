import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  loginForm: FormGroup;

  constructor() { 
    this.loginForm = new FormGroup({
      codigo:   new FormControl("D-888", Validators.required),
      email:    new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
  });
  }

  ngOnInit() {
  }

  onSubmit(){
    let form = this.loginForm.value;
    console.log(form)
  }

}
