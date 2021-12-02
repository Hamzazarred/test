import { RouterModule, Routes } from '@angular/router';
import { ConceptionComponent } from '../admin-componant/conception/conception.component';
import { AccComponent } from '../core-ecommerce/acc/acc.component';

import { ClientComponent } from './client.component';

export const appRoutesclient: Routes = [{
    path: '', component: ClientComponent, children: [
        {path: '', component: AccComponent},
        { path: 'tag', loadChildren: () => import('../admin-componant/tags/tags.module').then(m =>m.TagsModule) },
        { path: 'taille/:idBoutique', loadChildren: () => import('../admin-componant/conception/conception.module').then(m => m.ConceptionModule) },
        { path: 'cadre/:idBoutique', loadChildren: () => import('../admin-componant/cadre/cadre.module').then(m => m.CadreModule) },
        { path: 'slider/:idBoutique', loadChildren: () => import('../admin-componant/slider/slider.module').then(m => m.SliderModule) },
    ]}];