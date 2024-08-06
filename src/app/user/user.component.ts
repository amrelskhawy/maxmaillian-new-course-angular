import { Component,  Input, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor( Math.random() * DUMMY_USERS.length )

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  // Intialize random selected user
  selectedUser = signal(DUMMY_USERS[randomIndex])

  // generate function compute the path of the user avatar
  getImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // On Click user card func
  onSelectUser() {
    const randomIndex = Math.floor( Math.random() * DUMMY_USERS.length )
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
