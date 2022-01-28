import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {

userForm=new FormGroup({
  name: new FormControl('',[Validators.required,Validators.pattern("^(?!)[a-zA-Z]*(?<!)$")]),
  email:new FormControl('',Validators.email),
  password: new FormControl('',[Validators.minLength(8),Validators.pattern("^[a-zA-Z]+$")]),
  phone: new FormControl('',[Validators.pattern("[7-9]\d{9}"),Validators.minLength(10),Validators.maxLength(10)])
})

  // public userForm!: FormGroup;
  // constructor(private fb:FormBuilder){
  //   this.userForm=fb.group({
  //     name:['',Validators.required],
  //     email:['',Validators.required],
  //     mobileNumber:['',Validators.required],
  //   })

  // }

  

  ngOnInit(): void {
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
}
