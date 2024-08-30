import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserMessage } from './models/user-message';
import { MessageListComponent } from "./components/message-list/message-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInputComponent, MessageListComponent],
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
