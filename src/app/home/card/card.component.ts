import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() videos  : any;
  // videos: any = [{ id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  // { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  // { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' },
  // { id: 1, videoImage: 'assets/image/appicon.png', lastseen: '4 hours' }]
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor() { }

  ngOnInit() {

  }

}
