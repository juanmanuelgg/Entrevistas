import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTodoBoardComponent } from './group-todo-board.component';

describe('GroupTodoBoardComponent', () => {
  let component: GroupTodoBoardComponent;
  let fixture: ComponentFixture<GroupTodoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTodoBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTodoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
