import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth-area/login/login.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { OrderComponent } from './components/order-area/order/order.component';
import { OrderDetailComponent } from './components/order-area/order-detail/order-detail.component';
const routes = [
    { path: "", redirectTo: '/store', pathMatch: 'full' },
    { path: "store", component: ProductListComponent, canActivate: [AuthGuard] },
    { path: "store/products/category/:id", component: ProductListComponent, canActivate: [AuthGuard] },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "store/order", component: OrderComponent, canActivate: [AuthGuard] },
    { path: "store/order/orderDetails", component: OrderDetailComponent, canActivate: [AuthGuard] },
    { path: "**", redirectTo: '/store' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map