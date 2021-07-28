import { Component, OnInit } from '@angular/core';
import { faFolder, faLaptop, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void { }

}
