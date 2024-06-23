import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }

  salir(): void{
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }


  irHome(): void{
    this.router.navigate([""], {relativeTo: this.route})
  }
  irAlmacen(): void{
    this.router.navigate(["almacen"], {relativeTo: this.route})
  }
  irLlanteria(): void{
    this.router.navigate(["llanteria"], {relativeTo: this.route})
  }
  irAlmacen2(): void{
    this.router.navigate(["almacen2"], {relativeTo: this.route})
  }
}
