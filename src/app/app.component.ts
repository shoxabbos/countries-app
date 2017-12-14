import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFreeBannerConfig, AdMobFree } from '@ionic-native/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public admobFree: AdMobFree) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-8477109833223606/6645943872',
        isTesting: false,
        autoShow: true
      };

      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare().then((result) => {
        console.log(result);
      }).catch((result) => {
        console.log(result);
      });


    });
  }
}
