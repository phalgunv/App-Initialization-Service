import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor() {
    console.log('AppInitService constructor');
  }

  init() {
    console.log('AppInitService init');

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('foo');
      }, 300);
    });
    return myPromise;
  }
}
