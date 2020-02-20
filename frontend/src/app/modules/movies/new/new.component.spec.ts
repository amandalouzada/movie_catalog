import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponent } from './new.component';
import { HttpClientModule } from '@angular/common/http';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ NewComponent ]
    })
    .compileComponents();

    // TestBed.configureTestingModule({
    //   imports: [HttpClientModule],
    // });
    // service = TestBed.inject(MoviesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
