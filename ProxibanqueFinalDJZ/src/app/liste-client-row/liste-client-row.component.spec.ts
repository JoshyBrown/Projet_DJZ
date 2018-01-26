import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClientRowComponent } from './liste-client-row.component';

describe('ListeClientRowComponent', () => {
  let component: ListeClientRowComponent;
  let fixture: ComponentFixture<ListeClientRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeClientRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeClientRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
