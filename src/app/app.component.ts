
import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  latitude!: number;
  longitude!: number;
  
  public origin: any
  public destination: any
  
  ngOnInit() {
    this.getDirection()
  }
  
  getDirection() {
    this.origin = { latitude: 24.799448, longitude: 120.979021 }
    this.destination = { latitude: 24.799524, longitude: 120.975017 }
  
    this.origin = 'Taipei Main Station'
    this.destination = 'Taiwan Presidential Office'
  }
}

