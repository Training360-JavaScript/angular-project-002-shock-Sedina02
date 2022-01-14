import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User();

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter();
  @Output() updateClick: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectClicked(dataRow: User): void {
    this.selectClick.emit(true);
  }

  onUpdateClicked(dataRow: User): void {
    this.updateClick.emit(true);
  }

  onDeleteClicked(dataRow: User): void {
    this.deleteClick.emit(true);
  }
}
