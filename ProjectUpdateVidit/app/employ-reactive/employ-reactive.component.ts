import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employ-reactive',
  templateUrl: './employ-reactive.component.html',
  styleUrls: ['./employ-reactive.component.css']
})
export class EmployReactiveComponent implements OnInit {
  isValidFormSubmitted: boolean;
  msg :string;
  loginForm = new FormGroup({
    empno : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    dept : new FormControl('',Validators.required),
    desig : new FormControl('',Validators.required),
    basic : new FormControl('',Validators.required),
  });
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if(this.loginForm.invalid){
       return;    
    }     
    this.isValidFormSubmitted = true;    
  this.msg="Employ Form Submitted...";
    console.log(this.loginForm.valid);
}
  constructor() { }

  ngOnInit(): void {
  }

}
