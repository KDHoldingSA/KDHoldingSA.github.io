import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHoldingsChartComponent } from './current-holdings-chart.component';

describe('CurrentHoldingsChartComponent', () => {
  let component: CurrentHoldingsChartComponent;
  let fixture: ComponentFixture<CurrentHoldingsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentHoldingsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentHoldingsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
