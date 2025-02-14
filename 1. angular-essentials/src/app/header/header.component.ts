import { Component } from '@angular/core';
@Component({
    selector: 'app-header',  // will tell angular to render this component in the <app-header> tag
    standalone: true,  // this is a standalone component, it doesn't need to be nested in another component
    // template: '<h1>Hello Angular</h1>',  //this is the content for the componeent, use for very simple components
    templateUrl: './header.component.html',  //use this for more complex components
    styleUrls: ['./header.component.css']  //use this for more complex components
})
export class HeaderComponent {
    title: string = "Custom Header"; //can be used in the header.component.html file
    custom_variable: string = "some custom variable"; //can be used in the header.component.html file
}