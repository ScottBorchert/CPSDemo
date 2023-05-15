import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://us-central1-gptlab-api.cloudfunctions.net/app'; // Replace with your API endpoint

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken() : string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    // Check if the token exists in localStorage or any other storage mechanism
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout(): void {
    // Clear the stored token from localStorage or any other storage mechanism
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    const url = `${this.apiUrl}/usersbycredentials?email=${email}&password=${password}`;
  
    return this.http.get<User>(url).pipe(
      map((user: User) => {
        if (user) {
          console.log(user);
          this.setToken(user.id.toString()); // Convert the user id to a string
          this.userService.setUser(user);
          return user;
        } else {
          return throwError(new Error('Failed to login'));
        }
      }),
      catchError((error) => {
        console.error('Error in login:', error);
        return throwError(new Error('Failed to login'));
      })
    );
  }
  

  checkUserCredentials(email: string, password: string) {
    const url = `https://us-central1-gptlab-api.cloudfunctions.net/app/usersbycredentials?email=${email}&password=${password}`;
    return this.http.get<User>(url);
  }
}
