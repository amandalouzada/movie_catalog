import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public formLogin: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
    this.formLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.formLogin.value)
      .subscribe(
        (res: { token: string }) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/movies']);
          toastr.success("Login Realizado com sucesso!");
        },
        (error) => {
          toastr.error(error.error.message)
        }
      )
  }
}
