import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users= USERS;
  selectedUser: any = null;
  protected readonly title = signal('my-first-app');
  onUserSelected(id: string) {
    console.log('onUserSelected id:', id);
    this.selectedUser = this.users.find((u: any) => u.id === id);
    console.log('selectedUser:', this.selectedUser);

}
}