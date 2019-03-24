import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.page.html',
  styleUrls: ['./take-photo.page.scss'],
})
export class TakePhotoPage implements OnInit {

  constructor(
    public alertController: AlertController,
    private camera: Camera,
    private geolocation: Geolocation
  ) { }

  coords: any;
  base64Image: String;

  ngOnInit() {
    this.showGeolocationAlert();
  }

  async showGeolocationAlert() {
    const alert = await this.alertController.create({
      header: 'Geolocalização',
      subHeader: 'Teste',
      message: 'Para confirmar a autencidade de suas fotos, precisamos de sua geolocalização.',
      buttons: ['OK']
    });

    alert.present().then(() => {
      this.loadGeolocation();
    });
  }

  loadGeolocation() {
    this.geolocation.getCurrentPosition()
      .then(resp => {
        this.coords = resp.coords;
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
