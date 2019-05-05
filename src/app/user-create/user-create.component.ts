import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

userForm: FormGroup;
name:string='';
emailValid=false;
phoneValid=false;
email:string='';
phoneNumber:string='';
matcher:string="";

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'phoneNumber' : [null, Validators.required]
    });
  }
  onFormSubmit(form:NgForm) {
    debugger;
    let email=this.userForm.value.email;
    let phone=this.userForm.value.phoneNumber;
    if(email.endsWith('.com')&&email.indexOf('@')>-1){
      this.emailValid=true;
    }else{
      this.emailValid=false;
    }if(/^[1-9]\d{9}$/.test(phone)){
      this.phoneValid=true;
    }else{
      this.phoneValid=false;
    }
      if(this.phoneValid&&this.emailValid){
      this.api.postUser({name:this.userForm.value.name,email:this.userForm.value.email,phoneNumber:phone})
        .subscribe(res => {
            //let id = res['_id'];
            this.router.navigate(['/users']);
          }, (err) => {
            console.log(err);
          });
    }else{
      alert("Incorrect data entered")
    }
    }

}
