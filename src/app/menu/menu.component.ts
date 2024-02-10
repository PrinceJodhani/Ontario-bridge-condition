import { Component, EventEmitter, Output} from '@angular/core';
import { Bridge } from '../bridge';
import { Bridges } from '../bridges';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  bridges: Array<Bridge> = Bridges;
@Output() bridgeSelected: EventEmitter<Bridge> = new EventEmitter();



  onBridgeSelected(bridge: Bridge): void{
    console.log(bridge);
    this.bridgeSelected.emit(bridge);
  }

}
