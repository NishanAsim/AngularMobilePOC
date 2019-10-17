import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DoctorService} from '@src/app/doctor.service';
@Component({
  selector: 'app-doctor-registeration',
  templateUrl: './doctor-registeration.component.html',
  styleUrls: ['./doctor-registeration.component.css']
})
export class DoctorRegisterationComponent implements OnInit {
 firstName:string='';
 lastName:string='';
  constructor(
    private doctorService : DoctorService,
    private router:Router
  ) { }

  addDoctor(){
    this.doctorService.addDoctor(this.firstName+' '+this.lastName);
    this.router.navigate(['/auto-generated']);
  }
  ngOnInit() {
    
  }

}
