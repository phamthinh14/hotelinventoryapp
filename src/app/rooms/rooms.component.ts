import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName: string = 'California';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  title: string = 'Room List';
  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  constructor() {}

  ngDoCheck(): void {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos:
          'https://cache.marriott.com/content/dam/marriott-renditions/WASLR/waslr-desk-0002-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('11-Nov-2022'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos:
          'https://cache.marriott.com/content/dam/marriott-renditions/WASLR/waslr-desk-0002-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('11-Nov-2022'),
        rating: 2.5,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1500,
        photos:
          'https://cache.marriott.com/content/dam/marriott-renditions/WASLR/waslr-desk-0002-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('11-Nov-2022'),
        rating: 5.5,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://cache.marriott.com/content/dam/marriott-renditions/WASLR/waslr-desk-0002-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*',
      checkInTime: new Date('11-Nov-2022'),
      checkOutTime: new Date('11-Nov-2022'),
      rating: 4.5,
    };
    this.roomList = [...this.roomList, room];
  }
}
