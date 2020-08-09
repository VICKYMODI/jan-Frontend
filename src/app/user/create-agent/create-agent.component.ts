import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl, EmailValidator  } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {

  agentForm: FormGroup;
  eachAgentData:any
  firstname: any;
  middlename:any;
  lastname: any;
  

  responsedata: any;
  allOffices: any;
  constructor(
    fb: FormBuilder,
    private router: Router,
    private api: AgentService,
    private http:HttpClient
    
    ) { 
      this.agentForm = fb.group({
        
        'FullName':[null, Validators.required],
        'password':[null, Validators.required],
        'email':[null, Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
        
      })

    }
  ngOnInit(): void {
    
  }
 


  submitForm(form : FormGroup){

    
    
  const data = {
      "FullName"            :   this.agentForm.controls['FullName'].value,
      "password"            :   this.agentForm.controls['password'].value,
      "email"               :   this.agentForm.controls['email'].value,
     
      }
    
   // console.log("final_data",data);
    this.api.post('api/user/signup', data )
    .subscribe(
      response => {
        this.responsedata = response
        this.api.Name = this.responsedata.data.FullName
        this.api.ID = this.responsedata.data._id
        
        if (this.responsedata.status_code == 200) {
          console.log("response",this.responsedata);
          Swal.fire("Your account successfully created",'Success')
          this.router.navigate(['/afterLogin']);
        }
        if (this.responsedata.status_code != 200) {
          Swal.fire('Something went wrong', 'error')
         console.log("response",this.responsedata.status_code);
        }
      }
    )
    
  }
} 


      



