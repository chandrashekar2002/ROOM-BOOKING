import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export interface Location {
  lat: number;
  lng: number;
  address: string;
}

export interface Room {
  label: string;
  price: number;
}

export interface Hotel {
  id: number;
  city: string;
  name: string;
  services: string[];
  location: Location;
  rate: number;
  stars: number;
  images: string[];
  email: string;
  rooms: Room[];
}