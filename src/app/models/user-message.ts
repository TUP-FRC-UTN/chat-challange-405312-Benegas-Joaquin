export class UserMessage {
  username: string;
  messageText: string;

  constructor(username: string, messageText: string) {
    this.username = username;
    this.messageText = messageText;
  }
}