import { FullComponent } from './layouts/full/full.component';
export const Approutes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/accueil', pathMatch: 'full' },
            {
                path: 'accueil',
                loadChildren: () => import('./component/trending/trending.module').then(m => m.TrendingModule)
            },
            {
                path: 'component',
                loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/accueil'
    }
];
//# sourceMappingURL=app-routing.module.js.map