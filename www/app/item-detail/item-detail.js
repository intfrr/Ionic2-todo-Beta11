import {Page, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'app/item-detail/item-detail.html',
})

export class ItemDetailPage {
  constructor(navParams: NavParams) {
    this.navParams = navParams;

    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }


}
