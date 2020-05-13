import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WomenComponent } from './women/women.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'app-cart',
    component: CartComponent
  }, {
    path: 'app-shopping-cart',
    component: ShoppingCartComponent
  },{
    path: 'app-men',
    component: MenComponent
  }, {
    path: 'about-us',
    component: AboutUsComponent
  }, {
    path: "app-women",
    component: WomenComponent
  }, {
    path: "**",
    component: HomeComponent
  }

];

export const AppRoutes = RouterModule.forRoot(appRoutes);
