import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonComponent} from "./pokemon/pokemon.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: 'pokemon', component: PokemonComponent,
  },
  {
    path: 'todo', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
