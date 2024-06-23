import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css'
})
export class AlmacenComponent {
  precioUnitario: number = 0;
  cantidad: number = 0;
  total: number | null = null;

  calcularTotal(): void {
    if (this.precioUnitario <= 0 || this.cantidad <= 0) {
      alert('Por favor, ingrese valores válidos.');
      return;
    }

    let subtotal = this.precioUnitario * this.cantidad;

    let descuento = 0;
    if (this.cantidad > 20) {
      descuento = 0.10;
    } else if (this.cantidad > 10) {
      descuento = 0.05;
    }
    
    this.total = subtotal * (1 - descuento);
  }
}
