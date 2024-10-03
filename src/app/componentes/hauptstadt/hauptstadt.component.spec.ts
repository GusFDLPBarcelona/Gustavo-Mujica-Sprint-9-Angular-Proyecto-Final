import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauptstadtComponent } from './hauptstadt.component';

describe('HauptstadtComponent', () => {
  let component: HauptstadtComponent;
  let fixture: ComponentFixture<HauptstadtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HauptstadtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauptstadtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
