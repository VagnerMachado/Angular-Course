import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',

})
export class DashboardItemComponent {

  // -- most current manner to get input
  // @Input({ required: true }) image!: { src: string; alt: string }
  // @Input() title!: string;

  // oldr manner to get ithe input: signal
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();


}
