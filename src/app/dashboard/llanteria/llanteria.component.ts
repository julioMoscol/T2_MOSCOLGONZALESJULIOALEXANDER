import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-llanteria',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './llanteria.component.html',
  styleUrl: './llanteria.component.css'
})
export class LlanteriaComponent {
  cantidadLlantas: number = 0;
  precioPorLlantaMenosDe5: number = 800;
  precioPorLlanta5OMas: number = 700;

  calcularTotal(): number {
    if (this.cantidadLlantas < 5) {
      return this.cantidadLlantas * this.precioPorLlantaMenosDe5;
    } else {
      return this.cantidadLlantas * this.precioPorLlanta5OMas;
    }
  }
}
