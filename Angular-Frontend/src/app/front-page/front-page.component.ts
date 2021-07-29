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
