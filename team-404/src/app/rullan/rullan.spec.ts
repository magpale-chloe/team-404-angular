import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rullan } from './rullan';

describe('Rullan', () => {
  let component: Rullan;
  let fixture: ComponentFixture<Rullan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rullan]
    }).compileComponents();

    fixture = TestBed.createComponent(Rullan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render member name in h2', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h2Element = compiled.querySelector('h2');
    expect(h2Element?.textContent).toContain('Harvey Laurence P. Rullan');
  });

  it('should toggle description visibility on button click', () => {
    expect(component.isDescriptionVisible()).toBe(false);
    component.toggleDescription();
    expect(component.isDescriptionVisible()).toBe(true);
  });
});