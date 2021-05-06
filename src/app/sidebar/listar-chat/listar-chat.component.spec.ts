import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarChatComponent } from './listar-chat.component';

describe('ListarChatComponent', () => {
  let component: ListarChatComponent;
  let fixture: ComponentFixture<ListarChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
