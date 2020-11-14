//  // A MIME type is a label used to identify a type of data.
//  // It is used so software can know how to handle the data.
//  //  It serves the same purpose on the Internet that file extensions do on Microsoft Windows.

// import { AbstractControl } from '@angular/forms';
// import { Observable, Observer, of } from 'rxjs';
// // get value of control from file, read it, then check for mime type of file, validator is just a function
// // square brackets here indicate dynamic property name
// export const mimeType = (
//   control: AbstractControl
// ): Promise<{ [key: string]: any | null }> | Observable<{ [key: string]: any | null }> => {
//   if (typeof(control.value) === 'string') {
//     return of(null);
//   }
//   const file = control.value as File | null;
//   const fileReader = new FileReader();

//   // must subscribe to either promise or observable, here we create  our own observable from scratch, static create method
//   // observable takes function as arguement that gets an observer passed in by rxjs
//   // the observer is a tool used to control when observable emits new data
//   const frObs = Observable.create(
//     (observer: Observer<{ [key: string]: any }>) => {
//       fileReader.addEventListener('loadend', () => {
//             // creates a new array of 8 bit unsigned integers, as a way to allow us access or
//        // read certain patterns in pattern and meta data to parse mime type we dont just want to check extension
//        // we want to infer file type by looking into the file and Uint arrow allows us to do this,
//        // also why we wrap it in there as an array buffer because we can concert it
//         const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
//         let header = '';
//         // asssume file is not valid here change to true if it is valid
//         let isValid = false;
//           // building string of hexidecimal values
//         // tslint:disable-next-line: prefer-for-of
//         // to really get the file type we need to read the pattern with a for loop
//         // tslint:disable-next-line: prefer-for-of
//         for (let i = 0; i < arr.length; i++) {
//           header += arr[i].toString(16);
//         }
//         switch (header) {
//           case '89504e47':
//             isValid = true;
//             break;
//           case 'ffd8ffe0':
//           case 'ffd8ffe1':
//           case 'ffd8ffe2':
//           case 'ffd8ffe3':
//           case 'ffd8ffe8':
//             isValid = true;
//             break;
//           default:
//             isValid = false; // Or you can use the blob.type as fallback
//             break;
//         }
//         if (isValid) {
//           // call observer next emit new value from observer of null, have to return (omit in observable)
//           // null if it is valid
//           observer.next(null);
//         } else {
//           observer.next({ invalidMimeType: true });
//         }
//         // let any subscribers know we are done
//         observer.complete();
//       });
//       if (file === null) {
//         return
//       } else {
//         fileReader.readAsArrayBuffer(file);
//       }
      
//     }
//   );
//   return frObs;
// };



////////////////////////////////////////////
// A MIME type is a label used to identify a type of data.
 // It is used so software can know how to handle the data.
 //  It serves the same purpose on the Internet that file extensions do on Microsoft Windows.

 import { AbstractControl } from '@angular/forms';
 import { Observable, Observer, of } from 'rxjs';
 // get value of control from file, read it, then check for mime type of file, validator is just a function
 // square brackets here indicate dynamic property name
 export const mimeType = (
   
   control: AbstractControl
 ): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
   if (!control.value || typeof(control.value) === 'string') {
     return of(null);
   }
   const file = control.value as File;
   const fileReader = new FileReader();
 
   // must subscribe to either promise or observable, here we create  our own observable from scratch, static create method
   // observable takes function as arguement that gets an observer passed in by rxjs
   // the observer is a tool used to control when observable emits new data
   const frObs = Observable.create(
     (observer: Observer<{ [key: string]: any }>) => {
       fileReader.addEventListener('loadend', () => {
             // creates a new array of 8 bit unsigned integers, as a way to allow us access or
        // read certain patterns in pattern and meta data to parse mime type we dont just want to check extension
        // we want to infer file type by looking into the file and Uint arrow allows us to do this,
        // also why we wrap it in there as an array buffer because we can concert it
         const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
         let header = '';
         // asssume file is not valid here change to true if it is valid
         let isValid = false;
           // building string of hexidecimal values
         // tslint:disable-next-line: prefer-for-of
         // to really get the file type we need to read the pattern with a for loop
         // tslint:disable-next-line: prefer-for-of
         for (let i = 0; i < arr.length; i++) {
           header += arr[i].toString(16);
         }
         switch (header) {
           case '89504e47':
             isValid = true;
             break;
           case 'ffd8ffe0':
           case 'ffd8ffe1':
           case 'ffd8ffe2':
           case 'ffd8ffe3':
           case 'ffd8ffe8':
             isValid = true;
             break;
           default:
             isValid = false; // Or you can use the blob.type as fallback
             break;
         }
         if (isValid) {
           // call observer next emit new value from observer of null, have to return (omit in observable)
           // null if it is valid
           observer.next(null);
         } else {
           observer.next({ invalidMimeType: true });
         }
         // let any subscribers know we are done
         observer.complete();
       });
       fileReader.readAsArrayBuffer(file);
     }
   );
   return frObs;
 };
 
