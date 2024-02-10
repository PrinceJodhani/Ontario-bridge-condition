import { Component } from '@angular/core';
import { Bridge } from './bridge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular bridge';

  currentBridge!: Bridge;

  handleBridgeSelected(bridge:Bridge):void{
    console.log('handle bridge change', bridge);
    this.currentBridge = bridge;
  }

}
