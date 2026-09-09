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
});
