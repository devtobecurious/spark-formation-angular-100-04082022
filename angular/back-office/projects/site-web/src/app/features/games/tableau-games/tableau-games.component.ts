import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tableau-games',
  templateUrl: './tableau-games.component.html',
  styleUrls: ['./tableau-games.component.css']
})
export class TableauGamesComponent implements OnInit {
  @Input() list: string[] = [];
  @Input() titre: string = '';

  @Output() edition = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickPourEditer(item: string): void  {
    this.edition.emit(item);
  }

  get yaDesLignes(): boolean {
    return this.list.length > 0;
  }
}
