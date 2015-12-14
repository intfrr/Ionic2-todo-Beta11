import {App, Platform} from 'ionic/ionic';
import {ListPage} from './list/list';
import {DataService} from './data/data';

@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
    <ion-overlay></ion-overlay>
  `,
  providers: [DataService]
})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = ListPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
