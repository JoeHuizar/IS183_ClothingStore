import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';


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
  }

];

export const AppRoutes = RouterModule.forRoot(appRoutes);
