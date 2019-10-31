import { Component, OnInit } from '@angular/core';
import {RegsiterForm} from './../../modeleinteface/register';
import  {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model = new RegsiterForm('' , '' , '' , '' , '');
submitted = false;

OnRegisterForm(registerForm: NgForm) { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
