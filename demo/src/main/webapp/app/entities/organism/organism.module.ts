import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterdemoSharedModule } from 'app/shared/shared.module';
import { OrganismComponent } from './organism.component';
import { OrganismDetailComponent } from './organism-detail.component';
import { OrganismUpdateComponent } from './organism-update.component';
import { OrganismDeletePopupComponent, OrganismDeleteDialogComponent } from './organism-delete-dialog.component';
import { organismRoute, organismPopupRoute } from './organism.route';

const ENTITY_STATES = [...organismRoute, ...organismPopupRoute];

@NgModule({
  imports: [JhipsterdemoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    OrganismComponent,
    OrganismDetailComponent,
    OrganismUpdateComponent,
    OrganismDeleteDialogComponent,
    OrganismDeletePopupComponent
  ],
  entryComponents: [OrganismDeleteDialogComponent]
})
export class JhipsterdemoOrganismModule {}
