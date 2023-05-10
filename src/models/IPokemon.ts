import {TypePokemon} from "./TypePokemon";

export interface IPokemon {
  name: string
  url?: string | any
  id?: string | any
  types: TypePokemon[],
  sprites: {
    front_default: string,
    other: {
      dream_world: {
        front_default: string,
      }
    }
  }
}
