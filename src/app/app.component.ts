import { Component } from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFreeBannerConfig, AdMobFree } from '@ionic-native/admob-free';
import {CacheService} from "ionic-cache";
import {Network} from "@ionic-native/network";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = 'HomePage';

    constructor(public toastCtrl: ToastController, platform: Platform, private network: Network, cache: CacheService, statusBar: StatusBar, splashScreen: SplashScreen, public admobFree: AdMobFree) {
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

            // setting cache
            cache.setDefaultTTL(60 * 60 * 24 * 31);

            // Keep our cached results when device is offline!
            cache.setOfflineInvalidate(false);


            // internetni tekshirish
            let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
                let toast = this.toastCtrl.create({
                    message: 'Internetni qo`shishni ilojisi bormi? :)',
                    duration: 3000
                });
                toast.present();
            });

        });
    }
}
