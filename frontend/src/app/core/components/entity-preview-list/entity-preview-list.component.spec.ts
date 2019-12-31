import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityListPreviewComponent } from './entity-preview-list.component';

describe('EntityListPreviewComponent', () => {
  let component: EntityListPreviewComponent;
  let fixture: ComponentFixture<EntityListPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityListPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityListPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
