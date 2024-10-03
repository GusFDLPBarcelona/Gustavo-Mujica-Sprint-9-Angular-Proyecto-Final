import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakepalComponent } from './fakepal.component';

describe('FakepalComponent', () => {
  let component: FakepalComponent;
  let fixture: ComponentFixture<FakepalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakepalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakepalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
