import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Raquin } from './raquin';

describe('Raquin', () => {
	let component: Raquin;
	let fixture: ComponentFixture<Raquin>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Raquin]
		})
			.compileComponents();

		fixture = TestBed.createComponent(Raquin);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});