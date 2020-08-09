import { Component, OnInit,TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  response: any;
  responseData: any;

  constructor(fb: FormBuilder,private api: AgentService,private router: Router,) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submitForm(form: FormGroup) {
    let use = this.loginForm.controls['username'].value;
    let pass = this.loginForm.controls['password'].value;
    this.api.get('api/user/login/?email=' + use + '&password=' + pass)
      .subscribe((data) => {
        this.responseData = data;
        this.api.Name = this.responseData.FullName;
        this.api.ID = this.responseData._id;
        this.api.Password = pass;
        this.response = data;
        this.router.navigate(['/afterLogin']);
      },
        error => {
          Swal.fire('Username/Password', 'Either Username or password is invalid', 'error')
        })
  }

  signup(){
    this.router.navigate(['/signup']);
  }

}
