import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BNS1Page } from './bns1.page';

describe('BNS1Page', () => {
  let component: BNS1Page;
  let fixture: ComponentFixture<BNS1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BNS1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
