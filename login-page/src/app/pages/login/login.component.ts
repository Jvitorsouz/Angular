import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../componets/default-login-layout/default-login-layout.component';

@Component({
  selector: 'app-login',
  imports: [DefaultLoginLayoutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
