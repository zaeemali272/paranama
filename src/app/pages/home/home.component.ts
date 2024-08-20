import { Component } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleriaModule } from 'primeng/galleria';



interface GalleriaImage {
  URL: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  img: GalleriaImage[] = [];

  ngOnInit() {
    this.img = [
      {
        URL: 'assets/front-1.png',
      },
      {
        URL: 'assets/front-0.png',
      },
      {
        URL: 'assets/front-2.png',
      },
      {
        URL: 'assets/front-3.png',
      },
    ];
  }
}
