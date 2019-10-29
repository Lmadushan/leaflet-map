import { Component, OnInit } from '@angular/core';
declare let L;
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js';
import { Coordinates } from './coordinates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  lonlat;
  lng: number = 6.9;
  lat: number = 81;

  ngOnInit() {

    const map = L.map('map').setView([this.lng, this.lat], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker;
    map.on('click ', function mapClickListen(e) {
      var pos = e.latlng;
      this.lonlat = pos;
      console.log(this.lonlat);

      if (marker) {
        map.removeLayer(marker);
      }

      marker = L.marker(
        pos, {
        draggable: true
      });

      marker.on('drag', function (e) {

        this.lonlat = e.latlng;
        console.log(this.lonlat);

      });
      marker.addTo(map);
    }.bind(this));
  }

  clk(){
    console.log('out' + '\n' + this.lonlat);
  }
  set(){
    this.lonlat.lat = 6;
    this.lonlat.lng = 6;
    console.log(this.lonlat);
  }
}
