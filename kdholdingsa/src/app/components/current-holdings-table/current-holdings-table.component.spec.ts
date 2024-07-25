import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHoldingsTableComponent } from './current-holdings-table.component';

describe('CurrentHoldingsTableComponent', () => {
  let component: CurrentHoldingsTableComponent;
  let fixture: ComponentFixture<CurrentHoldingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentHoldingsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentHoldingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
