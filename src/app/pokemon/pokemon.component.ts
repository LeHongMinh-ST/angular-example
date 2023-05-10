import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {IPokemon} from "../../models/IPokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemons: IPokemon[] = []

  private offset: number = 0

  private limit: number = 10

  constructor(private pokemonService: PokemonService) {
  }

  public async ngOnInit(): Promise<void> {
    this.pokemons = await this.pokemonService.getAllPokemons(this.limit, this.offset)
  }

  public async loadPokemon(): Promise<void> {
    this.offset = this.offset + this.limit
    this.pokemons = await this.pokemonService.getAllPokemons(this.limit, this.offset)
  }
}
