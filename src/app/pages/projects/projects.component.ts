import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public width = '1000px';
}
