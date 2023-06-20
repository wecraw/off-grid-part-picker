import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appliance } from '../common/appliance';
import { ApplianceGroup } from '../common/appliance-group';

@Component({
  selector: 'appliance-group',
  templateUrl: './appliance-group.component.html',
  styleUrls: ['./appliance-group.component.scss']
})
export class ApplianceGroupComponent implements OnInit {
  @Input() headerLabel: string = "Header";
  @Input() suggestedAppliances!: ApplianceGroup;
  @Input() selectedAppliances: Appliance[] = []
  @Input() mode!: "simple" | "custom";

  @Output() onSecondary: EventEmitter<any> = new EventEmitter();
  @Output() onPrimary: EventEmitter<any> = new EventEmitter();

  suggestedAppliancesDisplay = this.suggestedAppliances.appliances;


  secondaryClicked(){
    this.onSecondary.emit()
  }

  primaryClicked(){
    this.onPrimary.emit()
  }

  ngOnInit(){

  }
}
