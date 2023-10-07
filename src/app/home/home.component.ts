import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isPageLoading: boolean = true;
  @ViewChild('contentWrapper') contentWrapper: any; // Add this line

  constructor(private router: Router) {}

  ngOnInit() {
    // Simulate stopping the loader after a short delay (e.g., 1000 milliseconds) when the app starts
    setTimeout(() => {
      this.isPageLoading = false;
    }, 1000);

    // Listen for navigation end event to hide the loader
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isPageLoading = false;
      }
    });
  }

  // ngAfterViewInit() {
  //   // Hide the navigation bar after the loader has completed
  //   setTimeout(() => {
  //     this.contentWrapper.nativeElement.style.display = 'block';
  //   }, 1000);
  // }

  ngAfterViewInit() {
    // Check if contentWrapper is defined before accessing nativeElement
    if (this.contentWrapper) {
      this.contentWrapper.nativeElement.style.display = 'block';
    }
  }
  
}
