// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError = false; 

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth:AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/portal/home'], { replaceUrl: true });
    }
  }
  

  login() {
    this.loginError = false; // Reset the error state

    if (this.loginForm.valid) {
      //const email = this.loginForm.value.email;
      //const password = this.loginForm.value.password;
      
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['/portal/home'], { replaceUrl: true });
        },
        (err: Error) => {
          alert(err.message);
        }
      );

      /*
      this.checkUserCredentials(email, password).subscribe(response => {
        // Handle the response
        if (response) {
          //this.userService.setUser(response);
          console.log(response);
        } else {
          this.loginError = true; // Set loginError to true if the user is not found
        }
      }, error => {
        // Handle the error
        console.error(error);
        this.loginError = true; // Set loginError to true in case of an error
      });
      */
    }
  }

  register() {
    // Implement registration logic here
    console.log('Register button clicked');
  }

  resetPassword() {
    // Implement reset password logic here
    console.log('Reset password clicked');
  }

  checkUserCredentials(email: string, password: string) {
    const url = `https://us-central1-gptlab-api.cloudfunctions.net/app/usersbycredentials?email=${email}&password=${password}`;
    return this.http.get<User>(url);
  }
}
