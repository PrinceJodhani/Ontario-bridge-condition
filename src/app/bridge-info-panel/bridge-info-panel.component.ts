import { Component , Input} from '@angular/core';
import { Bridge } from '../bridge';


function prettyPrintDimention(value: number | null): string{
  return value ? `${value} m`: 'unknown';
}


@Component({
  selector: 'app-bridge-info-panel',
  templateUrl: './bridge-info-panel.component.html',
  styleUrl: './bridge-info-panel.component.css'
})
export class BridgeInfoPanelComponent {

 @Input() bridge!: Bridge;

 width(): string{
  return prettyPrintDimention(this.bridge.width)
 }

 length(): string{
  return prettyPrintDimention(this.bridge.length)
 }

 age(): number{
  const currentYear = (new Date()).getFullYear();
  return currentYear - this.bridge.year;
 }


}
