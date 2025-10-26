import { Component } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
changeUser()
{
  const randomIndex=Math.floor(Math.random()*USERS.length);
  this.selectedUser=USERS[randomIndex];

}
  selectedUser=USERS[0];
  get userImgPath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }
}
