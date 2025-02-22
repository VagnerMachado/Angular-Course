import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { AppModule } from "../app.module";

// Creating a shared module as Card is used by many components
@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent] // For every componenent that adds SharedModule
})

export class SharedModule{

}