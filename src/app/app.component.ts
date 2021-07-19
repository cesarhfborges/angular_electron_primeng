import {Component} from '@angular/core';
import {ElectronService} from "ngx-electron";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nebular';

  constructor(
    private _electronService: ElectronService
  ) {
  }

}
