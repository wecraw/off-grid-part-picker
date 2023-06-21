import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { find } from 'rxjs';
import { Appliance } from '../common/interfaces/appliance';
import { ApplianceGroup } from '../common/interfaces/appliance-group';

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

  suggestedAppliancesDisplay: Appliance[] = [];
  fillers: number = 0

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getFillers()
  }

  secondaryClicked(){
    this.onSecondary.emit()
  }

  primaryClicked(){
    this.onPrimary.emit()
  }

  getFillers(){
    if (window.innerWidth > 503) {
      this.fillers = 4 - this.suggestedAppliancesDisplay.length % 4
      if (this.fillers === 4 ) this.fillers = 0
    } else {
      this.fillers = 3 - this.suggestedAppliancesDisplay.length % 3
      if (this.fillers === 3 ) this.fillers = 0

    }
  }

  addAppliance(appliance: Appliance){
    this.selectedAppliances.push(appliance)
    this.scroll()
  }

  removeAppliance(index: number){
    this.selectedAppliances.splice(index, 1)
  }

  toggle(appliance: Appliance){
    let i = this.selectedAppliances.findIndex(obj => obj.name === appliance.name) //need to change this to ID

    if (i === -1) {
      this.selectedAppliances.push(appliance)
    } else {
      this.selectedAppliances.splice(i, 1)
    }
    
  }
  
  scroll(){
    let objDiv = document.getElementById("wrapper")!;
    setTimeout(() => {
      objDiv.scrollTo({top: objDiv.scrollHeight, behavior: 'smooth'});
    }, 1) //duration of fade out animation

    

  }

  isSelected(appliance: Appliance){
    let i = this.selectedAppliances.findIndex(obj => obj.name === appliance.name) //need to change this to ID
    return (i !== -1)
  }

  ngOnInit(){
    this.suggestedAppliancesDisplay = this.suggestedAppliances.appliances
    this.getFillers()
  }
}
