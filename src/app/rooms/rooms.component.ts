import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'California';
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomList: RoomList[] = [];

  constructor() {}

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
  }

  selectRoom(room: RoomList) {
    console.log(room);
  }
}
