/*
 * Copyright (C) 2021 Juan Manuel González Garzón
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnInit } from '@angular/core';
import { faFolder, faLaptop, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../services/photo';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  public urlLinkedin: string = 'https://www.linkedin.com/in/juan-manuel-gonzález-garzón';
  public urlGithub: string = 'https://github.com/juanmanuelgg';
  public urlJekyll: string = 'https://juanmanuelgg.github.io';

  public faLaptop = faLaptop;
  public faLaptopCode = faLaptopCode;
  public faFolder = faFolder;

  public images: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  ngOnInit() {
    this.photoService.getImages().then(images => this.images = images);
  }
}
