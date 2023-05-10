import {Injectable} from '@angular/core';
import {IPokemon} from "../../models/IPokemon";
import api from "../../api";
import {AxiosResponse} from "axios";
import IResult from "../../models/IResult";
import {IPokemonsResult} from "../../models/IPokemonsResult";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: IPokemon[] = []

  constructor() {
  }

  public async getAllPokemons(limit: number, offset: number): Promise<IPokemon[]> {

    const res: AxiosResponse<IPokemonsResult> = await api.getPokemons({limit, offset})

    let pokemons: IPokemon[] = res.data.results

    for (const pokemon of pokemons) {
      let newPokemon = await this.createPokemonObject(pokemon)

      this.pokemons.push(newPokemon)
    }

    return this.pokemons
  }

  public async createPokemonObject(pokemon: IPokemon): Promise<IPokemon> {
    const res: AxiosResponse<IPokemon> = await api.getPokemon(pokemon.name)
    return res.data
  }
}
