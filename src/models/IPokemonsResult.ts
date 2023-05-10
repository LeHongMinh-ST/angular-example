import {IPokemon} from "./IPokemon";

export interface IPokemonsResult {
  results: IPokemon[]
  count: number
  next?: string
  previous?: string
}
