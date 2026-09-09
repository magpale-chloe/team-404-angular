import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Staana } from './staana';

describe('Staana', () => {
  let component: Staana;
  let fixture: ComponentFixture<Staana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Staana],
    }).compileComponents();

    fixture = TestBed.createComponent(Staana);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render member name in h2', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const h2Element = compiled.querySelector('h2');
    expect(h2Element?.textContent).toContain('Sta. Ana, Matthew E.');
  });

  it('should toggle description visibility on button click', () => {
    expect(component.isDescriptionVisible()).toBe(false);
    component.toggleDescription();
    expect(component.isDescriptionVisible()).toBe(true);
  });
});
