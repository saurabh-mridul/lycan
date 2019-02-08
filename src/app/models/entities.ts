export class Geo {
  lat: string;
  lng: string;
}

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export class Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  isSelected: boolean;
}

export class Post {
  id: number;
  userId: number;
  title: String;
  isSelected: boolean;
}

export class Comment {
  id: number;
  postId: number;
  name: String;
}

export class AlertNotification {
  alertType: string;
  isOpen: boolean;
  isClosable: boolean;
  content: string;
  recievedTime: string;
}
