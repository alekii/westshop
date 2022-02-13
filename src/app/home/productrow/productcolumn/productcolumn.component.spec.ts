import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcolumnComponent } from './productcolumn.component';

describe('ProductcolumnComponent', () => {
  let component: ProductcolumnComponent;
  let fixture: ComponentFixture<ProductcolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcolumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
