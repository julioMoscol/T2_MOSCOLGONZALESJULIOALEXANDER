import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  error: string = '';

  constructor(private router: Router,
    private authService: AuthService
  ){

  }
  
  submit(usuario: HTMLInputElement, password: HTMLInputElement):void{
    if(usuario.value === 'MOSCOL' && password.value === "12345"){
      this.authService.login(usuario.value, password.value);
      sessionStorage.setItem('usuario', usuario.value);
      this.error = '';
      this.router.navigateByUrl("/dashboard");
    } else{
      this.error = 'Usuario o Contraseña incorrectos';
    }
  }
}
