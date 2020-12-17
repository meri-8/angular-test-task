import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
  isSubmitted: boolean = false;
  customInput1: string = '';
  customInput2: string = '';
  customInput3: string = '';
  customInput4: string = '';
  customInput5: string = '';

  onNextClick(event: any): void {
    this.isSubmitted = true;
  }
}
