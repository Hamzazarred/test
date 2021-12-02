import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
 
const routes: Routes = [   
    
    {path: 'cn/:idBoutique', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)},
    {path: 'sigup', loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)},
    {path: 'sigin', loadChildren: () => import('../login/login.module').then(m => m.LoginModule)},
    {path: 'cu', loadChildren: () => import('../client/client.module').then(m => m.clientModule)},
    {path: 'register/:id', loadChildren: () => import('../register-boutique/register-boutique.module').then(m => m.RegisterBoutiqueModule)},
    // {path: 'editor', loadChildren: () => import('../editor/editor.module').then(m => m.EditorModule)},
    {path: 'shop', loadChildren: () => import('../boutique/boutique.module').then(m => m.BoutiqueModule)},
   
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
