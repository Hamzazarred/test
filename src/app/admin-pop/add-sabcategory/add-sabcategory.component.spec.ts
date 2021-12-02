import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSabcategoryComponent } from './add-sabcategory.component';

describe('AddSabcategoryComponent', () => {
  let component: AddSabcategoryComponent;
  let fixture: ComponentFixture<AddSabcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSabcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSabcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
