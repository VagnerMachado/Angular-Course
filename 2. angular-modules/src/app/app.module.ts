import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/tasks.module";


//declare this as module and inside decorate with all the componenets that will work together

//Tne components imported will not be able to be marked as standalone anymore

// main.ts file will be different when using modules
@NgModule({
    //non standalone componenets that know aboutn one another
    declarations: [AppComponent, HeaderComponent, UserComponent],

    // the started component
    bootstrap: [AppComponent],

    // imports for standalone components
    imports: [BrowserModule, SharedModule, TaskModule]


})

export class AppModule { }