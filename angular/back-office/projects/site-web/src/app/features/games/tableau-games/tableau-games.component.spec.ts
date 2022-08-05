import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauGamesComponent } from './tableau-games.component';

describe('TableauGamesComponent', () => {
  let component: TableauGamesComponent;
  let fixture: ComponentFixture<TableauGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
