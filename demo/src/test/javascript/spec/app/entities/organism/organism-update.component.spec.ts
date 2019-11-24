import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { JhipsterdemoTestModule } from '../../../test.module';
import { OrganismUpdateComponent } from 'app/entities/organism/organism-update.component';
import { OrganismService } from 'app/entities/organism/organism.service';
import { Organism } from 'app/shared/model/organism.model';

describe('Component Tests', () => {
  describe('Organism Management Update Component', () => {
    let comp: OrganismUpdateComponent;
    let fixture: ComponentFixture<OrganismUpdateComponent>;
    let service: OrganismService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhipsterdemoTestModule],
        declarations: [OrganismUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(OrganismUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(OrganismUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(OrganismService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Organism(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Organism();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});