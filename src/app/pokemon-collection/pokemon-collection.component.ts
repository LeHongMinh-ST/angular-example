import {Component, Input} from '@angular/core';
import {IPokemon} from "../../models/IPokemon";

@Component({
  selector: 'app-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.scss']
})
export class PokemonCollectionComponent {
  @Input('pokemon') pokemon!: IPokemon

  public getType(): string {
    return this.pokemon.types[0].type.name
  }
}
