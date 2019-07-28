import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'characters', loadChildren: './characters/characters.module#CharactersPageModule' },
  { path: 'films', loadChildren: './films/films.module#FilmsPageModule' },
  { path: 'species', loadChildren: './species/species.module#SpeciesPageModule' },
  { path: 'starship', loadChildren: './starship/starship.module#StarshipPageModule' },
  { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesPageModule' },
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
