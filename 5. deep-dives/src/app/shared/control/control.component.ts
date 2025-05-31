import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {

  constructor() {

    //lifecycle hood for after this render anywhere in site
    afterRender(() => {
      console.log('Control component after render!');
    });
      
      //lifecycle hook for after next render anywhere in site
    afterNextRender(() => {
      console.log('Control component after next render!');
    });
  }
  ngAfterContentInit(): void {
    //this lifecycle hook is called after the content child has been fully initialized
    console.log('Control component after content init!');
  }
  //NOT PREFERRED WAY TO ADD CLASS TO THE HOST
  // @HostBinding('class') class = 'control'; // this will add the class control to the host element of this component
  // @HostListener('click') onClick() {
  //   console.log('Control clicked');
  // }

  label = input.required<string>();
  private el = inject(ElementRef); // this will inject the element ref of the host element of this component
  
  // @ContentChild('input', { static: true }) inputElement!: ElementRef; // this will inject the input or textarea element of this component
  // content child gets the values of elements that are projected into this component using ng-content
  private inputElement = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  
  // viewChild or ViewChildren can be used to access elements that are part of the component's template with regular html tags
  onClickFromHost() {
    console.log('Control clicked!');
    console.log(this.el); // this will log the host element of this component
    
    //for viewChild or ViewChildren, via decoratoryou can use the following line to access the input or textarea element
    // console.log(this.inputElement.nativeElement + " was clicked as content child"); // this will log the input or textarea element of this component
    
    //for viewchild via signal
    console.log(this.inputElement().nativeElement + " was clicked as content child"); // this will log the input or textarea element of this component
  }

}
