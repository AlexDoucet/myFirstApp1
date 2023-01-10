import { Component } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
 bool = true;
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  affichage(){
    this.bool = this.bool ? false : true;
  }
}

class User1{

  name : string;
  firstName : string;
  age:number;
  quote? : string;
  photo? : string;
constructor(name:string, firstName:string, age:number, quote:string){
  this.name = name;
  this.firstName = firstName;
  this.age = age;
  this.quote = quote;
  this.photo = "https://randomuser.me/api/portraits/lego/2.jpg" ;
}
}

let userOne = new User1("Doucet","Alexandre", 31, "Dieu bénisse")


