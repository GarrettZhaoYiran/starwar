import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { SwapiService } from './ng2-swapi';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

// @Component({
//   selector: 'my-custom-selector',
//   templateUrl: 'my-componet-template.component.html',
//   providers: [ SwapiService ]
// })

// export class myComponent {
//   constructor (private swapi: SwapiService) {}
// }

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
