import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoProvider } from '../../providers/produto/produto';


/**
 * Generated class for the CadastroProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html',
})
export class CadastroProdutoPage {

  localForm: FormGroup;
  home = HomePage;
  produtos = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, private localProvider:ProdutoProvider) {
  /* usamos o formbuilder para validar os campos aqui pode criar validadores customizados
      */
      this.localForm = formBuilder.group({
        nome: ['', Validators.required],
        valor: ['', Validators.required]
      });

      this.localProvider.getAll().subscribe(res=>this.produtos = res)
  }
  //caso o formulario seja valido salva o local e volta pra pagina inicial
  salvarProduto(){
    if (!this.localForm.valid) {
      alert('preencha todos os campos');
    } else {
      this.localProvider.insere(this.localForm.value);
      alert('salvo');
      this.voltarPagina();
    }
  }

  voltarPagina(){
    this.navCtrl.setRoot(HomePage);
  }
}
