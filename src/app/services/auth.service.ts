import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.example.com'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    const loginUrl = `${this.apiUrl}/login`; // Replace with your login API endpoint

    // Simulate API call to verify credentials
    return this.http.post<any>(loginUrl, { email, password }).pipe(
      map(response => {
        // Assuming the API response returns a token upon successful login
        const token = response.token;

        // Store the token in localStorage or any other storage mechanism
        localStorage.setItem('token', token);

        return true;
      }),
      catchError(() => of(false))
    );
  }

  logout(): void {
    // Clear the stored token from localStorage or any other storage mechanism
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Check if the token exists in localStorage or any other storage mechanism
    const token = localStorage.getItem('token');
    return !!token;
  }
}
