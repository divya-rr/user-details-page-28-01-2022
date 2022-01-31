import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ForbiddenNameValidator } from '../shared/forbiddenName.validator';
import { passwordValidator } from '../shared/password.validator';


@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent{
  constructor(private userService:UserService){}
  userForm!: FormGroup;
  
  

  

  ngOnInit(): void {
    this.userForm=new FormGroup({
      name: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z]+    )+[a-zA-Z]+$|^[A-Za-z]+$'),ForbiddenNameValidator(/test/)]),
      email:new FormControl('',
      {validators:[Validators.email,Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$")],
    asyncValidators:[this.userService.uniqueEmailValidator()]},),
      password: new FormControl('',[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*?&]).{8}$")]),
      //Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
      phone: new FormControl('',[Validators.required,Validators.pattern("[1-9][0-9]{9}")]),
      confirmPassword:new FormControl('',{validators:passwordValidator})
    })
  }
 
  
  get name(){
    return this.userForm.get('name')
  }

  get email(){
    return this.userForm.get('email')
  }
  
  get password(){
    return this.userForm.get('password')
  }
  get confirmPassword(){
    return this.userForm.get('confirmPassword')
  }

}