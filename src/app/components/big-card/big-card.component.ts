import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input()
  picture: string = ''
  @Input()
  cardTitle: string = ''
  @Input()
  cardDescription: string = ''
  @Input()
  Id: string = '1'


  ngOnInit(): void {
  }

}
