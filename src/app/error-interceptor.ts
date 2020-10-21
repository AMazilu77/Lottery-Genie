import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// manipulate incoming request 
export class ErrorIntercept implements HttpInterceptor {
 

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // handle method gives back the response observerable stream
      return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => {
              console.log(error);
              alert(error.error.error.message);
              return throwError(error);
          })
      );
    }
}