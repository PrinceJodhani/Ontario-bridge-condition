import { Component,Input } from '@angular/core';
import { Bridge } from '../bridge';

@Component({
  selector: 'app-bridge-info',
  templateUrl: './bridge-info.component.html',
  styleUrl: './bridge-info.component.css'
})
export class BridgeInfoComponent {

@Input() bridge!: Bridge;
}
