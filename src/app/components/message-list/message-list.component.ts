import { Component, Input } from '@angular/core';
import { UserMessage } from '../../models/user-message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  @Input() userMessagesList!: UserMessage[];
}
