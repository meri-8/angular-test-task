import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() label: string = 'Input Label';
  @Input() errorMessage: string = 'Error Message';
  @Input() disabled: boolean = false;
  @Input() isInvalid: boolean = false;
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  onValueClear(event: any): void {
    this.value = '';
    this.valueChange.emit(this.value);
  }
}
