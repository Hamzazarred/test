import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../admin-componant/categories/categories.component';
import { AcceuilComponent } from '../core/acceuil/acceuil.component';
import { AdminComponent } from './admin.component';

export const appRoutes: Routes = [{
    path: '', component: AdminComponent, children: [
       
            { path: '', component: AcceuilComponent},
            
            { path: 'category/:id', loadChildren: () => import('../admin-componant/categories/categories.module').then(m => m.CategoriesModule) },
            { path: 'scategory/:id', loadChildren: () => import('../admin-componant/subcategory/subcategory.module').then(m => m.SubcategoryModule) }]}];