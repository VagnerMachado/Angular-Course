import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
  
  //implements the lifecycle to avoid any typo in method name
export class ServerStatusComponent implements OnInit/*, OnDestroy*/
{
  
  currentStatus = signal<'online' | 'offline' | 'unknown' >('offline')
  private destroyReference = inject(DestroyRef);
  constructor() {

    // sets up a subscription to the signal, so that when the signal changes, the effect will run
    effect(() => {
      console.log('Server status changed to: ', this.currentStatus());
    });
}
 // Uncomment the following lines if you want to implement OnDestroy, older way 
 //  private interval: NodeJS.Timeout | null = null;

  //destroy the interval when the component is destroyed to avoid memory leaks
 
  // There is a way to do destroy with a listener in the template, but this is the more common way 
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval!);
  // }

  ngOnInit(){
    const interval = setInterval(() => {
      this.currentStatus.set(this.randomizeStatus());
    }, 5000); // Change every 5 seconds

    //set up the destroy listener to clear the interval when the component is destroyed
    this.destroyReference.onDestroy(() => {
      clearInterval(interval);
    });
  };

  randomizeStatus(): 'online' | 'offline' | 'unknown' {
    const statuses: ('online' | 'offline' | 'unknown')[] = ['online', 'offline', 'unknown'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  
  }
}

/*
-- Lifecycle hooks in order of execution:
-- https://v17.angular.io/guide/lifecycle-hooks
-- https://angular.dev/guide/components/lifecycle
ngOnChanges (if input properties change)
ngOnInit
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked
ngOnDestroy
*/