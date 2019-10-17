import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  items = ['Sumalaya Das','Saurojit Chakraborty','Malay Ghosh','Rahul Singh','Anuj Shaw'];
  addDoctor(doctor){
    this.items.push(doctor);
  }
  getDoctors(){
    return this.items;
  }
  clearDoctors(){
    this.items = [];
    return this.items;
  }
  constructor() { }
}
