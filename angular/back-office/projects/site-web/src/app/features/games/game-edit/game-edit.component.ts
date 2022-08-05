import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  @Input() surname: string = '';
  @Output() annulerEdition = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  clickSurAnnuler(): void {
    this.annulerEdition.emit();
  }

}
