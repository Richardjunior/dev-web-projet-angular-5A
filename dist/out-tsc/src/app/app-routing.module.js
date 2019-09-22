import { FullComponent } from './layouts/full/full.component';
export const Approutes = [
    {
        path: '',
        component: FullComponent,
        children: [
            { path: '', redirectTo: '/starter', pathMatch: 'full' },
            {
                path: 'starter',
                loadChildren: () => import('./component/trending/trending.module').then(m => m.StarterModule)
            },
            {
                path: 'component',
                loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/starter'
    }
];
//# sourceMappingURL=app-routing.module.js.map