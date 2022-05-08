import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
    { 
        path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
    }, 
    { 
        path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
    }, 
    { 
        path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) 
    }, 
    { 
        path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) 
    },
    { 
        path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule),
        canActivate: [AuthGuard]
    },
    { 
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        redirectTo: '/not-found' 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }