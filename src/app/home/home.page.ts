import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone'; // import IonButton for button functionality
import { RouterLink } from '@angular/router'; // import RouterLink to add link to button for 'status' page
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButton], 
})
export class HomePage {
  myStatus:string = ""; // status variable that we will save using storage
  constructor(private storage:Storage) {}

  async ionViewWillEnter() { // async method
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

}
