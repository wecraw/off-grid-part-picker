import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() label?: string;
  @Input() icon?: string;
  @Input() small?: boolean;
  @Input() subLabel?: string;
  @Input() selected?: boolean;
  @Input() selectable?: true;
  @Input() disabled?: false;

}
