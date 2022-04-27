import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobs';
  minHeight: number = 0

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    });
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      window.scrollTo(0, 0);
      // this.progressRef.start();
    }
    if (event instanceof NavigationEnd) {
      // this.progressRef.complete();
      // if (typeof window !== 'undefined') {
      // this.document.documentElement.scrollTop = 0;
      // this.document.body.scrollTop = 0;
      // }
    }

    if (event instanceof NavigationCancel) {
      // this.progressRef.complete();
    }

    if (event instanceof NavigationError) {
      // this.progressRef.setConfig({ color: 'red' });
      // this.progressRef.complete();
    }
    // this.minHeight = window.innerHeight - (65 + 48);
         this.minHeight = window.innerHeight - (89 + 367);
  }
}
