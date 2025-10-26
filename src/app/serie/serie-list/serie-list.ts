import { Component, OnInit } from '@angular/core';
import {Serie} from '../serie'
import { SerieService } from '../serie.service';


@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.html',
  styleUrl: './serie-list.css',
})
export class SerieList implements OnInit{
  series: Array<Serie> = [];
  averageSeasons = 0;
  selected: Serie | null = null; 

  constructor(private serieService: SerieService) {}

  getSeriesList(){
    this.serieService.getSeries().subscribe((series)=>{
      this.series=series;
      this.averageSeasons = this.calcularPromedioTemporadas(this.series);
    });
  }

  onSelect(s: Serie) {              
    this.selected = s;
  }

  ngOnInit() {
    this.getSeriesList();
    
      
  }

  private calcularPromedioTemporadas(list: Serie[]): number {
    let total = 0, count = 0;
    for (const s of list) {
      total += s.seasons;
      count++;
    }
    return count ? total / count : 0;
  }



}
