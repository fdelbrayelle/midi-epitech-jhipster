import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterdemoSharedModule } from 'app/shared/shared.module';
import { StudyVersionComponent } from './study-version.component';
import { StudyVersionDetailComponent } from './study-version-detail.component';
import { StudyVersionUpdateComponent } from './study-version-update.component';
import { StudyVersionDeletePopupComponent, StudyVersionDeleteDialogComponent } from './study-version-delete-dialog.component';
import { studyVersionRoute, studyVersionPopupRoute } from './study-version.route';

const ENTITY_STATES = [...studyVersionRoute, ...studyVersionPopupRoute];

@NgModule({
  imports: [JhipsterdemoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    StudyVersionComponent,
    StudyVersionDetailComponent,
    StudyVersionUpdateComponent,
    StudyVersionDeleteDialogComponent,
    StudyVersionDeletePopupComponent
  ],
  entryComponents: [StudyVersionDeleteDialogComponent]
})
export class JhipsterdemoStudyVersionModule {}
