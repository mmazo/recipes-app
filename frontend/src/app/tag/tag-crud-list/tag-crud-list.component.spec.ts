import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCrudListComponent } from './tag-crud-list.component';

describe('TagCrudListComponent', () => {
  let component: TagCrudListComponent;
  let fixture: ComponentFixture<TagCrudListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagCrudListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCrudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
