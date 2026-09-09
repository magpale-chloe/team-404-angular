import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Magpale } from './magpale';

describe('Magpale', () => {
  let component: Magpale;
  let fixture: ComponentFixture<Magpale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Magpale]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Magpale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
