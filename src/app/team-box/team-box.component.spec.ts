import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBoxComponent } from './team-box.component';

describe('TeamBoxComponent', () => {
  let component: TeamBoxComponent;
  let fixture: ComponentFixture<TeamBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamBoxComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('must have a valid flag api with https', () => {
    expect(component.flagsEndpoint).toMatch(/https:\/\/.*\.*/);
  });
});
