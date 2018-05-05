import { HomePage } from './../home/home';
import { EmailValidator } from './../../validators/email';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  registerForm: FormGroup;


  constructor(public navCtrl: NavController, public authData: AuthProvider,
    public formBuilder: FormBuilder) {
      /* usamos o formbuilder para validar os campos aqui pode criar validadores customizados
      como foi feito no email
      */
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
      EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }


  voltarPagina() {
    this.navCtrl.pop();
  }

  newUser() {
    this.authData.signupUser(this.registerForm.value.email, this.registerForm.value.password)
      .then(r => this.navCtrl.pop())
  }

}
