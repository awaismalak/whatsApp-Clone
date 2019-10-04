import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsmsComponent } from './searchsms.component';

describe('SearchsmsComponent', () => {
  let component: SearchsmsComponent;
  let fixture: ComponentFixture<SearchsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
