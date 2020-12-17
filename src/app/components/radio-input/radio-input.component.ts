import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {
  @Input() label: string = 'Radioinput Text';
  @Input() value: any;
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Output() change: EventEmitter<MatRadioChange> = new EventEmitter<MatRadioChange>();

  constructor() { }

  ngOnInit(): void { }

  onChange(event: MatRadioChange): void {
    this.change.emit(event);
  }
}
