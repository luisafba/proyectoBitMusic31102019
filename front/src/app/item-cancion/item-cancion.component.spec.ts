import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCancionComponent } from './item-cancion.component';

describe('ItemCancionComponent', () => {
  let component: ItemCancionComponent;
  let fixture: ComponentFixture<ItemCancionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCancionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
