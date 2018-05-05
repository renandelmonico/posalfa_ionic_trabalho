import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FotosProvider } from '../../providers/fotos/fotos';
import { IncluiFotoPage } from '../inclui-foto/inclui-foto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


/**
 * Generated class for the VisualizarFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto',
  templateUrl: 'foto.html',
})
export class FotoPage {

  foto:any = {};
  key: String;
  commentForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fotosProvider:FotosProvider, public formBuilder: FormBuilder) {
    this.foto = this.navParams.data.img
    this.key = this.navParams.data.key
    
    this.commentForm = formBuilder.group({
      comentario: ['', Validators.compose([Validators.required])]
    });
  }


  newComment() {
    if (!this.commentForm.valid) {
      alert('preencha todos os campos')
      return
    }

    if (!this.foto.comentario) {
      this.foto.comentario = []
    }

    this.foto.comentario.push({ texto: this.commentForm.value.comentario })

    this.fotosProvider.update(this.key, this.foto)
  }

  voltarPagina(){
    this.navCtrl.pop();
  }

}
