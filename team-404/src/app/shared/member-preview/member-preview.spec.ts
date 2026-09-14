import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberPreview } from './member-preview';

describe('MemberPreview', () => {
  let component: MemberPreview;
  let fixture: ComponentFixture<MemberPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
