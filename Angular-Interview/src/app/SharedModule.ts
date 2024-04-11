import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    // Import common components, pipes, directives that can be used across the entire application
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    // Export common components, pipes, directives that can be used across the entire application
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class SharedModule {}