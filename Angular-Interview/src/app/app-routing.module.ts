import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './guards/auth.guard';

// const routes: Routes = [
//   {
//       path: 'profile',
//       canActivateChild: [AuthGuard],
//       children: [
//           { path: 'overview', component: OverviewComponent },
//           { path: 'settings', component: SettingsComponent },
//       ],
//   },

const routes: Routes = [
  { path: 'footer', component: FooterComponent ,canActivate: [AuthGuard]},
  { path: 'products', canLoad:[AuthGuard], loadChildren: () => import('./modules/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
