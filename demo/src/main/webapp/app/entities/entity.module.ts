import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'study-version',
        loadChildren: () => import('./study-version/study-version.module').then(m => m.JhipsterdemoStudyVersionModule)
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.JhipsterdemoCountryModule)
      },
      {
        path: 'organism',
        loadChildren: () => import('./organism/organism.module').then(m => m.JhipsterdemoOrganismModule)
      },
      {
        path: 'study',
        loadChildren: () => import('./study/study.module').then(m => m.JhipsterdemoStudyModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class JhipsterdemoEntityModule {}
