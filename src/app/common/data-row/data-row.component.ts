import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {

  @Input() dataRow: User = new User();

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectClicked(user: User): void {
    this.selectClick.emit(this.dataRow);
  }

  onUpdateClicked(user: User): void {
    this.updateClick.emit(this.dataRow);
  }

  onDeleteClicked(user: User): void {
    this.deleteClick.emit(this.dataRow);
  }
}
