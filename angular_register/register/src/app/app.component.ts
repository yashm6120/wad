import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  registeredUsers: any[] = [];

  register() {
    console.log(this.user);
    this.registeredUsers.push(this.user);
    console.log(this.registeredUsers);
    this.resetForm();
  }

  resetForm() {
    this.user = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
}
