import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss']
})
export class HeroeDetailComponent implements OnInit {

  @Input() hero: Hero | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
