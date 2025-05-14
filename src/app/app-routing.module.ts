import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoPaginaComponent } from './components/cuerpo-pagina/cuerpo-pagina.component';
import { HerramientasComponent } from './layout/herramientas/herramientas.component';
import { ElectrodomesticosComponent } from './layout/electrodomesticos/electrodomesticos.component';
import { CuidadoPersonalComponent } from './layout/cuidado-personal/cuidado-personal.component';
import { BanosYCocinasComponent } from './layout/banos-ycocinas/banos-ycocinas.component';
import { OrganizadoresComponent } from './layout/organizadores/organizadores.component';
import { UsadosComponent } from './layout/usados/usados.component';
import { MueblesComponent } from './layout/muebles/muebles.component';

const routes: Routes = [
  {
    path: '',
    component: CuerpoPaginaComponent
  },
  {
    path: 'herramientas',
    component: HerramientasComponent
  },
  {
    path: 'electrodomesticos',
    component: ElectrodomesticosComponent
  },
  {
    path: 'cuidadoPersonal',
    component: CuidadoPersonalComponent
  },
  {
    path: 'muebles',
    component: MueblesComponent
  },
  {
    path: 'banosYCocinas',
    component: BanosYCocinasComponent
  },
  {
    path: 'organizadores',
    component: OrganizadoresComponent
  },
  {
    path: 'usados',
    component: UsadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
