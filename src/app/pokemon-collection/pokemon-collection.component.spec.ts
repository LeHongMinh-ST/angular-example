import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCollectionComponent } from './pokemon-collection.component';

describe('PokemonCollectionComponent', () => {
  let component: PokemonCollectionComponent;
  let fixture: ComponentFixture<PokemonCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCollectionComponent]
    });
    fixture = TestBed.createComponent(PokemonCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
