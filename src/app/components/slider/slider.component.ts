import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

interface GalleriaImage {
  URL: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [GalleriaModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() public GalleriaWidth!: string;
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
