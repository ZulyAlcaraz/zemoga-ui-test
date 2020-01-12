import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, ProgressBarComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.cardInfo = {
      backgroundUrl: '',
      name: '',
      category: '',
      votes: {
        total: 0,
        thumbsUp: 0,
        thumbsDown: 0
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
