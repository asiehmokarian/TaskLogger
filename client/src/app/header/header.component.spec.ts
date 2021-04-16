import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Task logger'`, () => {
    expect(component.title).toEqual('Task logger');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain(component.title);
  });

  it('header button should toggle the #sidebarMenuCollapsed when clicked', () => {
    const hostElement = fixture.nativeElement;
    const button: HTMLButtonElement = hostElement.querySelector('button');
    expect(component.sidebarMenuCollapsed).toBe(true, 'collapsed at first');
    button.click();
    expect(component.sidebarMenuCollapsed).toBe(false, 'spanned after one click');
    button.click();
    expect(component.sidebarMenuCollapsed).toBe(true, 'collapsed after second click');
  })

  it('header button should raise the #navbarTogglerEvent event when clicked', () => {
    const hostElement = fixture.nativeElement;
    const button: HTMLButtonElement = hostElement.querySelector('button');
    const expectedCollapsed = !component.sidebarMenuCollapsed;
    component.navbarTogglerEvent.subscribe(collapsed => expect(collapsed).toBe(expectedCollapsed));
    button.click();
  })
});
