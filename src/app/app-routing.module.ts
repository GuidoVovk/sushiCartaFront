import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './componentes/carta/carta.component';
import { EditAdicionalComponent } from './componentes/edit-adicional/edit-adicional.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path: 'carta', component: CartaComponent},
  {path: 'editAdicional/:id', component: EditAdicionalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
