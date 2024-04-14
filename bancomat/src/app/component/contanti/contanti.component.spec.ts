import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantiComponent } from './contanti.component';

describe('ContantiComponent', () => {
  let component: ContantiComponent;
  let fixture: ComponentFixture<ContantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContantiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
