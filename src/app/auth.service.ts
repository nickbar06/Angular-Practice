import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenUrl = 'http://localhost:4000/callback';
  private isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(): void {
    this.http.get<any>(environment.server.concat('/login'), { observe: 'response' }).subscribe({
      next: response => {
        const location = response.body;
        if (location) {
          window.location.href = location;
        }
        console.log(response)
      },
      error: err => {
        console.error('Error during login:', err);
      }
    });
  }

  exchangeCodeForToken(code: string): Observable<any> {
    const params = new HttpParams().set('code', code);

    return this.http.get<any>(this.tokenUrl, { params }).pipe(
      tap(response => {
        console.log(response);

        if (response.access_token) {
          localStorage.setItem('accessToken', response.access_token);
          localStorage.setItem('refreshToken', response.refresh_token);
          localStorage.setItem('userId', response.userId);
          this.isAuthenticated = true;
        }
      }),
      catchError(this.handleError<any>('exchangeCodeForToken'))
    );
  }


  logout(): void {
    localStorage.removeItem('userId');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  checkAuthentication(): boolean {
    return !!localStorage.getItem('userId');
  }

  setAuthentication(status: boolean): void {
    this.isAuthenticated = status;
  }

  refreshAccessToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      this.logout();
      return of(null);
    }

    const params = new HttpParams().set('refresh_token', refreshToken);

    return this.http.get<any>('http://localhost:4000/refresh-token', { params }).pipe(
      tap(response => {
        if (response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
        } else {
          this.logout();
        }
      }),
      catchError(this.handleError<any>('refreshAccessToken'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
