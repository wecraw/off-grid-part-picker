import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent {
  @Output() onSecondary: EventEmitter<any> = new EventEmitter();
  @Output() onPrimary: EventEmitter<any> = new EventEmitter();
  @Input() secondaryLabel: string = "Back";
  @Input() primaryLabel: string = "Next";
  @Input() hidePrimary: boolean = false;

  primaryClicked(){
    this.onPrimary.emit()
  }

  secondaryClicked(){
    this.onSecondary.emit()
  }
}
