import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Appliance } from '../common/interfaces/appliance';
import { ApplianceGroup } from '../common/interfaces/appliance-group';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'appliance-group',
  templateUrl: './appliance-group.component.html',
  styleUrls: ['./appliance-group.component.scss']
})
export class ApplianceGroupComponent implements OnInit {
  @Input() headerLabel: string = "Header";
  @Input() suggestedAppliances!: ApplianceGroup;
  @Input() selectedAppliances: Appliance[] = []
  @Input() applianceGroup!: "kitchen" | "bathroom" | "entertainment" | "bedroom" | "other";

  @Input() mode!: "simple" | "custom" | null;

  @Output() onSecondary: EventEmitter<any> = new EventEmitter();
  @Output() onPrimary: EventEmitter<any> = new EventEmitter();

  suggestedAppliancesDisplay: Appliance[] = [];
  fillers: number = 0

  applianceForm = this.getApplianceForm()
  editTitle: string = "Edit Appliance"

  showApplianceModal: boolean = false;

  hideModalBg: boolean = true;

  ngOnInit(){
    this.suggestedAppliancesDisplay = this.suggestedAppliances.appliances
    this.getFillers()
  }

  toggleApplianceModal(){
    this.showApplianceModal = !this.showApplianceModal
    if (this.showApplianceModal) this.hideModalBg = false;
  }

  getApplianceForm(appliance?: Appliance){

    let applianceForm;

    if (appliance){
      applianceForm = this.fb.group({
        name: [appliance.name, Validators.required],
        wattage: [appliance.wattage, [Validators.required, Validators.min(0.001)]],
        usageTime: [appliance.usageTime, [Validators.required, Validators.min(0.001), Validators.max(24)]],
        quantity: [appliance.quantity, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]],
        id: [appliance.id],
        editMode: [true]
      });
    } else {
      applianceForm = this.fb.group({
        name: ['', Validators.required],
        wattage: [null as unknown as number, [Validators.required, Validators.min(0.001)]],
        usageTime: [null as unknown as number, [Validators.required, Validators.min(0.001), Validators.max(24)]],
        quantity: [1, [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")]],
        id: Math.random().toString(36),
        editMode: [false]
      });
    }

    return applianceForm
  }

  constructor(private fb: FormBuilder) { }

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
      this.fillers = 4 - (this.suggestedAppliancesDisplay.length + 1) % 4
      if (this.fillers === 4 ) this.fillers = 0
    } else {
      this.fillers = 3 - (this.suggestedAppliancesDisplay.length + 1) % 3
      if (this.fillers === 3 ) this.fillers = 0

    }
  }

  addAppliance(appliance: Appliance){
    this.selectedAppliances.push(appliance)
    console.log(appliance)
    this.scroll()
  }



  onSubmitNewAppliance(){
    if (this.applianceForm.value.name && 
        this.applianceForm.value.wattage &&
        this.applianceForm.value.usageTime &&
        this.applianceForm.value.quantity &&
        this.applianceForm.value.id
      ){
      let newAppliance: Appliance = {
        name: this.applianceForm.value.name,
        wattage: +this.applianceForm.value.wattage,
        averageWattage: +this.applianceForm.value.wattage,
        averageUsageTime: +this.applianceForm.value.usageTime,
        usageTime: +this.applianceForm.value.usageTime,
        quantity: this.applianceForm.value.quantity,
        id: this.applianceForm.value.id,
        applianceGroup: this.applianceGroup
      }
      if (this.applianceForm.value.editMode){
        let i = this.selectedAppliances.findIndex(obj => obj.id === this.applianceForm.value.id)
        this.selectedAppliances[i] = newAppliance
      } else {
        this.addAppliance(newAppliance)
      }
      this.applianceForm.reset()
    } else {
      console.log("uh ohhhhh")
    }
    this.closeApplianceModal()
  }

  openApplianceModal(){
    this.showApplianceModal = true;
    this.hideModalBg = false;
  }

  removeAppliance(index: number){
    this.selectedAppliances.splice(index, 1)
  }

  onAddNewClick(){
    this.applianceForm = this.getApplianceForm()
    this.openApplianceModal()
  }

  onEditClick(index: number){
    this.applianceForm = this.getApplianceForm(this.selectedAppliances[index])
    this.editTitle = this.selectedAppliances[index].name
    this.openApplianceModal()
  }

  closeApplianceModal(){
    this.showApplianceModal = false
    this.hideModalBg = true;
  }

  toggle(appliance: Appliance){
    let i = this.selectedAppliances.findIndex(obj => obj.id === appliance.id)

    if (i === -1) {
      this.addAppliance(appliance)
    } else {
      this.selectedAppliances.splice(i, 1)
    }
  
  }
  
  scroll(){
    let objDiv = document.getElementById("wrapper")!;
    console.log(objDiv.scrollHeight)
    setTimeout(() => {
      objDiv.scrollTo({top: objDiv.scrollHeight, behavior: 'smooth'});
    }, 0.01) //duration of fade out animation    

  }

  isSelected(appliance: Appliance){
    let i = this.selectedAppliances.findIndex(obj => obj.id === appliance.id)
    return (i !== -1)
  }


  //DOM Helpers-----------------------------------------------------
  
  getModalBgFade(){
    if (this.showApplianceModal){
      return "fade-in-bg"
    } else {
      return "hidden"
    }
  }

  getModalFade(){
    if (this.showApplianceModal){
      return "fade-in slide-in-top"
    } else {
      return "hidden"
    }
  }

  closeOnBgClick(){
    this.closeApplianceModal();
  }
}
