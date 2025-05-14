import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLogoComponent } from './components/barra-logo/barra-logo.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { CuerpoPaginaComponent } from './components/cuerpo-pagina/cuerpo-pagina.component';
import { ContendorCardComponent } from './components/contendor-card/contendor-card.component';
import { PieDePaginaComponent } from './components/pie-de-pagina/pie-de-pagina.component';
import { HerramientasComponent } from './layout/herramientas/herramientas.component';
import { ElectrodomesticosComponent } from './layout/electrodomesticos/electrodomesticos.component';
import { CuidadoPersonalComponent } from './layout/cuidado-personal/cuidado-personal.component';
import { BanosYCocinasComponent } from './layout/banos-ycocinas/banos-ycocinas.component';
import { OrganizadoresComponent } from './layout/organizadores/organizadores.component';
import { UsadosComponent } from './layout/usados/usados.component';
import { MueblesComponent } from './layout/muebles/muebles.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraLogoComponent,
    BarraNavegacionComponent,
    CuerpoPaginaComponent,
    ContendorCardComponent,
    PieDePaginaComponent,
    HerramientasComponent,
    ElectrodomesticosComponent,
    CuidadoPersonalComponent,
    BanosYCocinasComponent,
    OrganizadoresComponent,
    UsadosComponent,
    MueblesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
