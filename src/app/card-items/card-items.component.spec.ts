import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemsComponent } from './card-items.component';

describe('CardItemsComponent', () => {
  let component: CardItemsComponent;
  let fixture: ComponentFixture<CardItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardItemsComponent]
    });
    fixture = TestBed.createComponent(CardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
