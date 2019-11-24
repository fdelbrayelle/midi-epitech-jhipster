import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IOrganism, Organism } from 'app/shared/model/organism.model';
import { OrganismService } from './organism.service';

@Component({
  selector: 'jhi-organism-update',
  templateUrl: './organism-update.component.html'
})
export class OrganismUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    organismName: []
  });

  constructor(protected organismService: OrganismService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ organism }) => {
      this.updateForm(organism);
    });
  }

  updateForm(organism: IOrganism) {
    this.editForm.patchValue({
      id: organism.id,
      organismName: organism.organismName
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const organism = this.createFromForm();
    if (organism.id !== undefined) {
      this.subscribeToSaveResponse(this.organismService.update(organism));
    } else {
      this.subscribeToSaveResponse(this.organismService.create(organism));
    }
  }

  private createFromForm(): IOrganism {
    return {
      ...new Organism(),
      id: this.editForm.get(['id']).value,
      organismName: this.editForm.get(['organismName']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOrganism>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
