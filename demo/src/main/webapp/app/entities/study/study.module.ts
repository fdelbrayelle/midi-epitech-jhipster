import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterdemoSharedModule } from 'app/shared/shared.module';
import { StudyComponent } from './study.component';
import { StudyDetailComponent } from './study-detail.component';
import { StudyUpdateComponent } from './study-update.component';
import { StudyDeletePopupComponent, StudyDeleteDialogComponent } from './study-delete-dialog.component';
import { studyRoute, studyPopupRoute } from './study.route';

const ENTITY_STATES = [...studyRoute, ...studyPopupRoute];

@NgModule({
  imports: [JhipsterdemoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [StudyComponent, StudyDetailComponent, StudyUpdateComponent, StudyDeleteDialogComponent, StudyDeletePopupComponent],
  entryComponents: [StudyDeleteDialogComponent]
})
export class JhipsterdemoStudyModule {}
