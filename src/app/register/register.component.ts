import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage = '';
  uForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  form: any = {};
  currentUser:any;
  
  formErrors = {
    'username': '',
    'email': '',
    'password': ''
  };
  validationMessages = {

    'username': {
      'minlength': 'Username must be at least 3 characters',
      'required': 'Username is required',
      'maxlength': 'Please enter less than 20 characters',
    },'email': {
      'required': 'Please enter your email',
      'email': 'please enter your vaild email'
    },
    'password': {
      'required': 'please enter your password',
     
      'minlength': 'Please enter more than 6 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };
 

  constructor(private router: Router,
              private fb: FormBuilder,
              private authservice : AuthService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.uForm = this.fb.group({
      'username': ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]
      ],
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      
      'password': ['', [
      
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
    });

    this.uForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.uForm) {
      
       return;
     }
     const form = this.uForm;
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

  login() {
   
    
    this.authservice.register(this.uForm.value).subscribe(
      data => {
        console.log(this.uForm.value);
      
        delete this.uForm.value.username;
      
     
        this.authservice.login(this.uForm.value).subscribe(//form controle
          data => {
           window.sessionStorage.clear();
           this.tokenStorage.saveToken(data.accessToken);
           this.tokenStorage.saveUser(data);
                   
           this.isLoginFailed = false;
           this.isLoggedIn = true;
           const user = this.tokenStorage.getUser();
            
              
            
          this.currentUser =this.tokenStorage.getUser;
          
          this.router.navigate(['/register',user.id])  },
            );
                
      },
      err => {

        this.errorMessage = err.error.message;
       
        this.isLoginFailed = true;
      }
    );
  }
}

