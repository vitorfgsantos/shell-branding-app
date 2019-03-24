import { Component, OnInit } from '@angular/core';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { MANUALS } from '../../constants';

@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.page.html',
  styleUrls: ['./manuals.page.scss'],
})
export class ManualsPage implements OnInit {
  public manuals = [];

  constructor(private document: DocumentViewer) {
    this.manuals = MANUALS;
  }

  ngOnInit() {
  }

  onClick(pdfLink) {
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // if (isMobile) {
    //   this.document.viewDocument(pdfLink, 'application/pdf', {});
    // } else {
    //   window.open(pdfLink, '_blank')
    // }

    window.open(pdfLink, '_blank');
  }

}
