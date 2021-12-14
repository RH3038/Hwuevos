import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarTwoComponent } from './menubar-two.component';

describe('MenubarTwoComponent', () => {
  let component: MenubarTwoComponent;
  let fixture: ComponentFixture<MenubarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
