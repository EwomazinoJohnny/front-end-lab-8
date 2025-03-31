import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonRadioGroup, IonRadio, IonItem, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
 // back button functionality -> IonButtons, IonBackButton
 // radio group functionality -> IonRadioGroup, IonRadio, IonItem, IonLabel
import { Storage } from '@ionic/storage-angular';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonItem, IonLabel, IonList, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StatusPage implements OnInit {
status:string = "";
  constructor(private storage:Storage, private router:Router) { }

  async onButtonClick(){  // async method
    console.log(this.status); // trapping button save event
    await this.storage.create(); // promise
    await this.storage.set('status', this.status); // promise
    this.router.navigate(['/home']);
  }

  async ionViewWillEnter() { // async method
    await this.storage.create();
    this.status = await this.storage.get('status');
  }
  ngOnInit() {
  }

}
