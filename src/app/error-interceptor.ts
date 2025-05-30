import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorComponent } from './error/error.component';


@Injectable()
// manipulate incoming request 
export class ErrorIntercept implements HttpInterceptor {
    constructor(private dialog: MatDialog ) { }
 

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // handle method gives back the response observerable stream
      return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => {
              let errorMessage = 'An unknown error occured.'
              if (error?.error?.message) {
                  errorMessage = error.error.message;
                  console.error('HTTP Error:', error);

              }
             this.dialog.open(ErrorComponent, {data: {message: errorMessage }});
              return throwError(error);
          })
      );
    }
}