import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

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
    private geolocation: Geolocation,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController
  ) { }

  coords: any = false;
  base64Image: String;

  ngOnInit() {
    this.showGeolocationAlert();
  }

  async showGeolocationAlert() {
    const alert = await this.alertController.create({
      header: 'Geolocalização',
      message: 'Para confirmar a autencidade de suas fotos, precisamos de sua geolocalização.',
      buttons: [{
        text: 'OK',
        handler: () => {

          setTimeout(() => {
            this.loadGeolocation();
          }, 500);

        }
      }],
    });

    alert.present();
  }

  loadGeolocation() {
    this.coords = [];
    this.geolocation.getCurrentPosition()
      .then(resp => {
        this.coords = resp.coords;
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  openCamera() {
    if (!window.cordova) {
      this.goToAuditPage();
      return;
    }

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
      // Handle error
    });
  }

  async goToAuditPage() {

    const loading = await this.loadingController.create({
      message: 'Enviando foto...',
      duration: 1000
    });
    await loading.present();

    setTimeout(async () => {
      let items = JSON.parse(localStorage.items);
      const index = items.findIndex(item => item.key === this.activatedRoute.snapshot.paramMap.get('key'));
      items[index].status = 'ok';

      localStorage.items = JSON.stringify(items);

      const alert = await this.alertController.create({
        header: 'Sucesso!',
        message: 'Para confirmar a autencidade de suas fotos, precisamos de sua geolocalização.',
        buttons: [{
          text: 'OK',
          handler: async () => {
            this.router.navigate(['/audit/pista/']);
          }
        }]
      });

      alert.present();
    }, 1000);

  }

}
