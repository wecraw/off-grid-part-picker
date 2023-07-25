import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appliance-editor',
  templateUrl: './appliance-editor.component.html',
  styleUrls: ['./appliance-editor.component.scss']
})
export class ApplianceEditorComponent {

  applianceForm = new FormGroup({
    name: new FormControl(''),
    wattage: new FormControl(''),
    usageTime: new FormControl(''),
    quantity: new FormControl('')
  });

}
