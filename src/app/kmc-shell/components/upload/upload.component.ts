import { Component, Input } from '@angular/core';

import { KMCLanguage } from "@kaltura/kmcng-core";

@Component({
  selector: 'kmc-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  @Input() uploadOpen: boolean;
  constructor(private lang: KMCLanguage) {
  }
}