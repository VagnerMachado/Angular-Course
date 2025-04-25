import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',

  // Using ViewEncapsulation.None to allow global styles to affect this component
  // this allows the styles of control to render in control htmlfor ngcontent(input or textarea)
  encapsulation: ViewEncapsulation.None,

  //PREFERREED WAY TO ADD CLASS TO THE HOST ELEMENT OF THIS COMPONENT
  host: {
    class: 'control', // this will add the class control to the host element of this componen
    '(click)': 'onClickFromHost()' // this will add the onclick event to the host element of this component
    // 'onmouseover': 'onMouseOver()' // this will add the onmouseover event to the host element of this component
    // 'onmouseout': 'onMouseOut()' // this will add the onmouseout event to the host element of this component
  }
})
export class ControlComponent {
  //NOT PREFERRED WAY TO ADD CLASS TO THE HOST
  // @HostBinding('class') class = 'control'; // this will add the class control to the host element of this component
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }

  label = input.required<string>();
  private el = inject(ElementRef); // this will inject the element ref of the host element of this component
  onClickFromHost() {
    console.log('Control clicked!');
    console.log(this.el); // this will log the host element of this component
  }

}
