import { Component } from '@angular/core';
import {Serie} from '../serie'

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.html',
  styleUrl: './serie-list.css',
})
export class SerieList {
  series: Array<Serie>=[];

}
