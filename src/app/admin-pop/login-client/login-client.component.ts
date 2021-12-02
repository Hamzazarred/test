import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { BoutiqueService } from 'src/app/service/boutique.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {
  errorMessage = '';
  userForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  form: any = {};
  currentUser:any;
  formErrors = {
   
    'email': '',
    'password': ''
  };
  validationMessages = {

 'email': {
      'required': 'Please enter your email',
      'email': 'please enter your vaild email'
    },
    'password': {
      'required': 'please enter your password'
    }
  };
 

  constructor(private router: Router,public dialogRef: MatDialogRef<LoginClientComponent>,
              private fb: FormBuilder,
              private authservice : AuthService,
              private tokenStorage: TokenStorageService,
              private boutiqueService :BoutiqueService,private token: TokenStorageService,)
               {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      
      'password': ['', [
        
        Validators.required
      ]
      ],
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.userForm) {
      
       return;
     }
     const form = this.userForm;
     console.log(form.value);
     for (const field in this.formErrors) {
       if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
         this.formErrors[field] = '';
         const control = form.get(field);
         if (control && control.dirty && !control.valid) {
           const messages = this.validationMessages[field];
           for (const key in control.errors) {
             if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
               this.formErrors[field] += messages[key] + ' ';
             }
           }
         }
       }
     }
  }
  reset(){
  
     this.router.navigate(['/cu'])  ;
   
    
  }
  login() {
   
    
  
  this.authservice.login(this.userForm.value).subscribe(//form controle
  data => {
   window.sessionStorage.clear();
   this.tokenStorage.saveToken(data.accessToken);
   this.tokenStorage.saveUser(data);
           
   this.isLoginFailed = false;
   this.isLoggedIn = true;
   const user = this.tokenStorage.getUser();
   window.location.reload();
      
    

  },
    err=>{
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
     
    });
        
      
    
  
  }
  }

