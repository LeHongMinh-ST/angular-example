import axios, {AxiosPromise} from "axios";
import IResult from "../models/IResult";
import {IPokemonsResult} from "../models/IPokemonsResult";
import {IPokemon} from "../models/IPokemon";

const headers = {
  "Content-type": "application/json"
}

const baseUrl: string = 'https://pokeapi.co/api/v2'
export const apiAxios = axios.create()

apiAxios.defaults.baseURL = `${baseUrl}`

apiAxios.defaults.headers.post['Content-type'] = "application/json"

export default {
  getPokemons(params: {} = {}): AxiosPromise<IPokemonsResult> {
    return apiAxios({
      method: 'get',
      url: '/pokemon',
      params
    })
  },

  getPokemon(id: string | number): AxiosPromise<IPokemon> {
    return apiAxios({
      method: 'get',
      url: `pokemon/${id}`,
    })
  },
}
