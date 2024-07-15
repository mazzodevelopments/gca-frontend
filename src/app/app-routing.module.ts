import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "./auth/utils/auth.guard";

const routes: Routes = [
  {
    path: 'gestor',
    loadChildren: () => import('./gestor/gestor.module').then(mod => mod.GestorModule),
    canMatch: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
