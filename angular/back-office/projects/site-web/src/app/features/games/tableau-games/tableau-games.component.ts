import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tableau-games',
  templateUrl: './tableau-games.component.html',
  styleUrls: ['./tableau-games.component.css']
})
export class TableauGamesComponent implements OnInit {
  @Input() list: string[] = [];
  @Input() titre: string = '';

  @Output() edition = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.edition.emit('test1');
    this.edition.emit('test2');
    this.edition.emit('test3');
  }

  clickPourEditer(): void  {
    this.edition.emit('test');
  }

  get yaDesLignes(): boolean {
    return this.list.length > 0;
  }
}
