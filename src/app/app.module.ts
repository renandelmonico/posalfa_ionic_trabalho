import { IncluiFotoPage } from './../pages/inclui-foto/inclui-foto';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { LocalProvider } from '../providers/local/local';
import { CadastroLocalPage } from '../pages/cadastro-local/cadastro-local';
import { FotosProvider } from '../providers/fotos/fotos';
import { Camera } from '@ionic-native/camera';
import { VisualizarFotosPage } from '../pages/visualizar-fotos/visualizar-fotos';
import { RegistrarPage } from '../pages/registrar/registrar';
import { FotoPage } from '../pages/foto/foto';
import { Geolocation } from '@ionic-native/geolocation';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { ProdutoProvider } from '../providers/produto/produto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroLocalPage,
    CadastroProdutoPage,
    IncluiFotoPage,
    VisualizarFotosPage,
    RegistrarPage,
    FotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), //criado arquivo deo configuracao e inicia o firebase
    AngularFireDatabaseModule, // modulo database
    AngularFireAuthModule // modulo de autenticacao
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroLocalPage,
    CadastroProdutoPage,
    IncluiFotoPage,
    VisualizarFotosPage,
    RegistrarPage,
    FotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    LocalProvider,
    FotosProvider,
    ProdutoProvider,
    Camera,      //plugin camera
    Geolocation //plugin de geolocalizacao
  ]
})
export class AppModule {}
