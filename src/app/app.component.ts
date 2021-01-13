import { Component, DoCheck, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: RouterModule,
  ) {
    this.initializeApp();
    // this.router.subscribe((url)=>{
    //   console.log("Constructor check route", url);
    //   this.currentRoute = url[0].path;
    // });
  }

  private currentRoute;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'Planning d\'arrosage',
      url: '/tabs/tab1',
      icon: 'calendar'
    },
    {
      title: 'Encyclopédie des plantes',
      url: '/tabs/tab2',
      icon: 'book'
    },
    {
      title: 'Mes plantes',
      url: '/tabs/tab3',
      icon: 'leaf'
    },
    // {
    //   title: 'Cimetière des plantes',
    //   url: '',
    //   icon: 'skull'
    // },
    // {
    //   title: 'Mon profil',
    //   url: '',
    //   icon: 'person-circle'
    // },

  ];

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private checkSelected(){
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase() === path.toLowerCase());
    }
  }

  ngOnInit() {
   this.checkSelected();
  }

  ngDoCheck(){
    this.checkSelected();
    console.log("Current route :", this.currentRoute);
  }
}
