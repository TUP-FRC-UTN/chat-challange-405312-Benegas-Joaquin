import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserMessage } from '../models/user-message';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Input() username!: string;
  messageText: string = '';

  @Output() messageSent = new EventEmitter<UserMessage>();

  sendMessage() {
    const userMessage = new UserMessage(this.username, this.messageText);
    this.messageSent.emit(userMessage);
  }
}
