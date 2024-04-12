import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LowerCasePipe } from "../product/pipes/lower-case.pipe";
import { ProductComponent } from "../product/product.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { UpperCasePipe } from "../product/pipes/upper-case.pipe";
import { HighlightDirective } from "../product/directives/highlight.directive";
import { AddBorderDirective } from "../product/directives/border.directive";
import { ProductListComponent } from "../product-list/product-list.component";

// Used to group related to components, directives, pipes, services
@NgModule({
    // Imported components, directives, pipes related to specific modues
    declarations: [ProductListComponent, ProductComponent, LowerCasePipe, UpperCasePipe, HighlightDirective, AddBorderDirective],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    // Exports components, directives, pipes related to specific modues
    exports: [ProductListComponent, ProductComponent, LowerCasePipe, UpperCasePipe, HighlightDirective, AddBorderDirective]
})

export class ProductsModule {}