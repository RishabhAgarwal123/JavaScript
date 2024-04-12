import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductComponent } from "../product/product.component";

const routes: Routes = [
    { path: '', component: ProductListComponent, pathMatch: 'full'},
    { path: 'products', component: ProductListComponent, pathMatch: 'full' },
    { path: 'products/:id', component: ProductComponent},
    { path: '**', component: ProductListComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {}