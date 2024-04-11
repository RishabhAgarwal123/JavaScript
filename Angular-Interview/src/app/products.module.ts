import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LowerCasePipe } from "./product/lower-case.pipe";
import { ProductComponent } from "./product/product.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { UpperCasePipe } from "./upper-case.pipe";

// Used to group related to components, directives, pipes, services
@NgModule({
    // Imported components, directives, pipes related to specific modues
    declarations: [ProductComponent, LowerCasePipe, UpperCasePipe],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    // Exports components, directives, pipes related to specific modues
    exports: [ProductComponent, LowerCasePipe, UpperCasePipe]
})

export class ProductsModule {}