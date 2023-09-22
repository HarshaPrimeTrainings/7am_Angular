import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let el:DebugElement;
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  })

  );

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('SHould have Header Element',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    el = fixture.debugElement;
    let headerElement = el.queryAll(By.css('h1'));
    expect(headerElement[0].nativeElement.textContent).toBe('App Component Demo');
  });

});
