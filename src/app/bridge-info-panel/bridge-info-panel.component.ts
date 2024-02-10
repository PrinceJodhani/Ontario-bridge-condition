import { Component , Input} from '@angular/core';
import { Bridge } from '../bridge';

@Component({
  selector: 'app-bridge-info-panel',
  templateUrl: './bridge-info-panel.component.html',
  styleUrl: './bridge-info-panel.component.css'
})
export class BridgeInfoPanelComponent {

 @Input() bridge!: Bridge;


}
