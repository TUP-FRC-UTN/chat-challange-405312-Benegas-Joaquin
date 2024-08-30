import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { UserMessage } from './models/user-message';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chat-app';

  userMessagesList: UserMessage[] = [];

  onMessageSent(userMessage: UserMessage): void {
    this.userMessagesList.push(userMessage);
  }
}
