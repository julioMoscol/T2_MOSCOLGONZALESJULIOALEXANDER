import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-almacen2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './almacen2.component.html',
  styleUrl: './almacen2.component.css'
})
export class Almacen2Component {
  cantidad: number = 0;
  precio: number = 0;
  totalAPagar: number = 0;
  descuentoAplicado: boolean = false;

  calcularTotal(): void {
    this.totalAPagar = this.cantidad * this.precio;

    if (this.totalAPagar > 200) {
      this.totalAPagar *= 0.8;
      this.descuentoAplicado = true;
    } else {
      this.descuentoAplicado = false;
    }
  }
}
