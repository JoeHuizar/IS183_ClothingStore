import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '**',
    component: LoginComponent
  }, {
    path: 'app-cart',
    component: CartComponent
  }, {
    path: 'app-store',
    component: StoreComponent
  }

];

export const AppRoutes = RouterModule.forRoot(appRoutes);
