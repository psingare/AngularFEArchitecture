import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPackComponent } from './content-pack.component';

describe('ContentPackComponent', () => {
  let component: ContentPackComponent;
  let fixture: ComponentFixture<ContentPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
