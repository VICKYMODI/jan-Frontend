import { Component, OnInit,TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  user;
  agentForm: FormGroup;

  constructor(fb: FormBuilder,private api: AgentService,private router: Router,) { 
    this.agentForm = fb.group({
        
      'FullName':[null, Validators.required],
      'password':[null, Validators.required],
      'email':[null, Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      
    })
  }

  ngOnInit(): void {
    this.user = this.api.Name;
  }

  edit(){

    this.router.navigate(['/editProfile']);
    
    
    }

  

}
