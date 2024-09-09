import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Terence Bundela | Full-Stack Developer';
  isPageLoading: boolean = true;
  @ViewChild('contentWrapper') contentWrapper: any; // Add this line

  constructor(private router: Router) {}

  ngOnInit() {
    // Simulate stopping the loader after a short delay (e.g., 1000 milliseconds) when the app starts
    // setTimeout(() => {
    //   this.isPageLoading = false;
    // }, 1000);

    // Listen for navigation end event to hide the loader
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.isPageLoading = false;
    //   }
    // });
  }

  ngAfterViewInit() {
    // Hide the navigation bar after the loader has completed
    // setTimeout(() => {
    //   this.contentWrapper.nativeElement.style.display = 'block';
    // }, 1000);
  }
}