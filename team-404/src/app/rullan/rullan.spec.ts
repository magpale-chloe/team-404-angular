import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rullan } from './rullan';

describe('Rullan', () => {
  let component: Rullan;
  let fixture: ComponentFixture<Rullan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rullan],
    }).compileComponents();

    fixture = TestBed.createComponent(Rullan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
