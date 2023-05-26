import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'customers',
    loadChildren: () => import('./customers/customers.module').then(x => x.CustomersModule)
  },
  { path:'orders',
    loadChildren: () => import('./orders/orders.module').then(x => x.OrdersModule)
  },
  { path:'',
    redirectTo: 'customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
