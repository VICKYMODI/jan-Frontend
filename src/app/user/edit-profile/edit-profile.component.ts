import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators,FormControl, EmailValidator  } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  agentForm: FormGroup;
  responsedata: any;
  getUser: any;

  constructor(fb: FormBuilder,
    private router: Router,
    private api: AgentService,
    private http:HttpClient) {
      this.agentForm = fb.group({
        
        'FullName'  :[null, Validators.required],
        'password'  :[null, Validators.required],
        'email'     :[null, Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
        
      })
     }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    setTimeout(x => { this.populateUser(), 2000 })
    
  }

  submitForm(){

    let ID = this.getUser._id
    
    const data = {
        "FullName"            :   this.agentForm.controls['FullName'].value,
        "password"            :   this.agentForm.controls['password'].value,
        "email"               :   this.agentForm.controls['email'].value,
       
        }
      
     // console.log("final_data",data);
      this.api.patch('api/user/edit/'+ ID ,data )
      .subscribe(
        response => {
          this.responsedata = response
          this.api.Name = this.responsedata.FullName
          //let shipperDetails = this.responsedata.data
          
          if (this.responsedata.status_code == 200) {
            console.log("response",this.responsedata);
            Swal.fire("Your have successfully edited Your account",'Success')
            this.router.navigate(['/afterLogin']);
          }
          if (this.responsedata.status_code != 200) {
            Swal.fire('Something went wrong', 'error')
           console.log("response",this.responsedata.status_code);
          }
        }
      )
      
    }

    populateUser(){

      let id=this.api.ID
      this.api.get('api/user/get/?id='+ id).subscribe((data)=>{
        this.getUser = data;
        console.log("tyty",this.getUser)
      })

      


      this.agentForm.controls['FullName'].setValue(this.getUser.FullName)
      this.agentForm.controls['email'].setValue(this.getUser.email) 
      this.agentForm.controls['password'].setValue(this.getUser.password)
     
    }

    cancel(){
      this.router.navigate(['/afterLogin']);
    }

}
