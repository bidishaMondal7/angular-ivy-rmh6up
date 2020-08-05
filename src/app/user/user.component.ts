import {Component, OnInit} from '@angular/core';
import {FormBuilder,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector : 'user-data-form',
  templateUrl :'./user.component.html',
  styleUrls : ['./user.component.css']
})

export class UserComponent implements OnInit{
  checkoutForm;
  constructor(private formBuilder: FormBuilder){
    this.checkoutForm = this.formBuilder.group({
      firstName : '',
      lastName : '',
      male : '',
      female: '',
      dob: '',
      brand: '',
      fashionStyle: '',
      address: ''

    });
  }
   ngOnInit() {
   
  }
  onSubmit(userData){
    console.log(userData);
    alert('your details are recorded!!!');
    console.warn('adding data',userData);
    this.checkoutForm.reset();
  }
}