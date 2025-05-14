import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

  @ViewChild('menuButton', { static: false }) menuButton!: ElementRef;

  closeMenu() {
    this.menuButton.nativeElement.click(); // Simula un clic en el botón para cerrar el menú
  }
}
